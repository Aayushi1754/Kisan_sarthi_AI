from fastapi import FastAPI, HTTPException, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from database import engine
from models import Base
from sqlalchemy.orm import Session
from fastapi import Depends
from database import get_db
import models
from schemas import FeatureCreate
from schemas import FeatureCreate, FeatureResponse
Base.metadata.create_all(bind=engine)
app = FastAPI(
    title="Kisan Sarthi API",
    description="Backend APIs for Kisan Sarthi",
    version="1.0.0"
)

# CORS Configuration

# A URL is OF 2 types and is made up of made up of: 
# FRONTEND  # http://localhost:5173
    #1)PROTOCOL- http
    #2)DOMAIN-localhost
    #3)PORT-5173
# BACKEND :
            #1)PROTOCOL- http
            #2)IP-127.0.0.1
            #3) PORT-8000
# middleware is security agent which prohibits the unauthorized usage of backend code from any other server without permission.
origins = [
    "http://localhost:5173",
    "https://kisan-sarthi-ai-silk.vercel.app",
    "https://kisan-sarthi-g8hlxytq1-aayushi54.vercel.app"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, # only this frontend URL can access my backend code.
    allow_credentials=True,# allow login, cookies etc
    allow_methods=["*"], # allow every HTTP method
    allow_headers=["*"], #allow every header (extra information sent during request)
)
# HTTPS CODE: 2-SUCESSFUL, 4-ERROR, 5-SERVER ERROR

# Global Exception Handler for unexpected error
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"message": "Internal Server Error"}
    )

# Dummy Database
features = {
    1: {
        "title": "Crop Disease Prediction",
        "description": "Identify crop diseases and get treatment recommendations.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOJt5v2PAKRETymbH1aUenVN3AiCVgJLe9UqhZHWLhQ&s=10"
    },
    2: {
        "title": "Soil Health Analysis",
        "description": "Analyze soil nutrients and receive fertilizer recommendations.",
        "image": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600"
    },
    3: {
        "title": "Weather Insights",
        "description": "View live weather forecasts to plan your farming activities.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnt2ATSrouUsNtrGI6kVprYJvVk6Ag_r1onCxtvfyheBWjrt5R2MbaPcI&s=10"
    },
    4: {
        "title": "Pest Management",
        "description": "Receive pest control suggestions and natural remedies.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKvmz1bZJ_fjJNthNpwzJ6FoSRP5UWrRZJcncPi1lidg&s=10"
    }
}
##Basically pydantic helps us to convert JSON format to python format and vice versa.
# Request Body Model



# Home Route
@app.get("/")
def home():
    return {
        "message": "Welcome to Kisan Sarthi API"
    }


# GET All Features
@app.get(
    "/api/features",
    response_model=list[FeatureResponse],
    status_code=status.HTTP_200_OK
)
def get_features(db: Session = Depends(get_db)):
    features = db.query(models.Feature).all()
    return features


# GET Feature By ID
@app.get("/api/features/{feature_id}", response_model=FeatureResponse, status_code=status.HTTP_200_OK)
def get_feature(feature_id: int, db: Session = Depends(get_db)):

    feature = db.query(models.Feature).filter(models.Feature.id == feature_id).first()

    if feature is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Feature not found"
        )

    return feature


# Search Feature
@app.get(
    "/api/features/search",
    response_model=FeatureResponse,
    status_code=status.HTTP_200_OK
)
def get_feature(feature_id: int, db: Session = Depends(get_db)):

    feature = db.query(models.Feature).filter(
        models.Feature.id == feature_id
    ).first()

    if feature is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Feature not found"
        )

    return feature


# POST - Add Feature
@app.post("/api/features", response_model=FeatureResponse, status_code=status.HTTP_201_CREATED)
def add_feature(feature: FeatureCreate, db: Session = Depends(get_db)):

    new_feature = models.Feature(
        title=feature.title,
        description=feature.description,
        image=feature.image
    )

    db.add(new_feature)
    db.commit()
    db.refresh(new_feature)

    return new_feature


# PUT - Update Feature
@app.put("/api/features/{feature_id}", response_model=FeatureResponse, status_code=status.HTTP_200_OK)
def update_feature(
    feature_id: int,
    feature: FeatureCreate,
    db: Session = Depends(get_db)
):

    db_feature = db.query(models.Feature).filter(
        models.Feature.id == feature_id
    ).first()

    if db_feature is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Feature not found"
        )

    db_feature.title = feature.title
    db_feature.description = feature.description
    db_feature.image = feature.image

    db.commit()
    db.refresh(db_feature)

    return  db_feature


# DELETE - Delete Feature
@app.delete("/api/features/{feature_id}", status_code=status.HTTP_200_OK)
def delete_feature(
    feature_id: int,
    db: Session = Depends(get_db)
):

    db_feature = db.query(models.Feature).filter(
        models.Feature.id == feature_id
    ).first()

    if db_feature is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Feature not found"
        )

    db.delete(db_feature)
    db.commit()

    return {
        "message": "Feature Deleted Successfully"
    }


# Health Check
@app.get("/health", status_code=status.HTTP_200_OK)
def health():
    return {
        "status": "API is running"
    }