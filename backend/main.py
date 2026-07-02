from fastapi import FastAPI, HTTPException, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel

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
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # only this frontend URL can access my backend code.
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
        "description": "Identify crop diseases using AI."
    },
    2: {
        "title": "Soil Health Analysis",
        "description": "Get soil nutrient recommendations."
    },
    3: {
        "title": "Weather Insights",
        "description": "View weather forecasts for farming."
    }
}
##Basically pydantic helps us to convert JSON format to python format and vice versa.
# Request Body Model
class Feature(BaseModel):
    title: str
    description: str


# Home Route
@app.get("/")
def home():
    return {
        "message": "Welcome to Kisan Sarthi API"
    }


# GET All Features
@app.get("/api/features", status_code=status.HTTP_200_OK)
def get_features():
    return features


# GET Feature By ID
@app.get("/api/features/{feature_id}", status_code=status.HTTP_200_OK)
def get_feature(feature_id: int):

    if feature_id not in features:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Feature not found"
        )

    return features[feature_id]


# Search Feature
@app.get("/api/features/search", status_code=status.HTTP_200_OK)
def search_feature(title: str):

    for feature in features.values():
        if feature["title"].lower() == title.lower():
            return feature

    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail="Feature not found"
    )


# POST - Add Feature
@app.post("/api/features", status_code=status.HTTP_201_CREATED)
def add_feature(feature: Feature):

    new_id = max(features.keys()) + 1

    features[new_id] = {
        "title": feature.title,
        "description": feature.description
    }

    return {
        "message": "Feature Added Successfully",
        "feature": features[new_id]
    }


# PUT - Update Feature
@app.put("/api/features/{feature_id}", status_code=status.HTTP_200_OK)
def update_feature(feature_id: int, feature: Feature):

    if feature_id not in features:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Feature not found"
        )

    features[feature_id] = {
        "title": feature.title,
        "description": feature.description
    }

    return {
        "message": "Feature Updated Successfully",
        "feature": features[feature_id]
    }


# DELETE - Delete Feature
@app.delete("/api/features/{feature_id}", status_code=status.HTTP_200_OK)
def delete_feature(feature_id: int):

    if feature_id not in features:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Feature not found"
        )

    deleted_feature = features.pop(feature_id)

    return {
        "message": "Feature Deleted Successfully",
        "feature": deleted_feature
    }


# Health Check
@app.get("/health", status_code=status.HTTP_200_OK)
def health():
    return {
        "status": "API is running"
    }