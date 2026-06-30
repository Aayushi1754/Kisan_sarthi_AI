from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
#Implemented CRUD API endpoints

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dummy Data
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

# BaseModel for POST and PUT
class Feature(BaseModel):
    title: str
    description: str


# 1. Home Route
@app.get("/")
def index():
    return {"message": "Hello FastAPI"}


# 2. GET All Features
@app.get("/api/features")
def get_features():
    return features


# 3. GET Feature by ID
@app.get("/api/features/{feature_id}")
def get_feature(feature_id: int):
    if feature_id in features:
        return features[feature_id]
    return {"message": "Feature not found"}


# 4. Search Feature using Query Parameter
@app.get("/api/features/search")
def search_feature(title: str):
    for feature in features.values():
        if feature["title"].lower() == title.lower():
            return feature
    return {"message": "Feature not found"}


# 5. POST - Add New Feature
@app.post("/api/features")
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


# 6. PUT - Update Feature
@app.put("/api/features/{feature_id}")
def update_feature(feature_id: int, feature: Feature):
    if feature_id in features:
        features[feature_id] = {
            "title": feature.title,
            "description": feature.description
        }
        return {
            "message": "Feature Updated Successfully",
            "feature": features[feature_id]
        }
    return {"message": "Feature not found"}


# 7. DELETE - Delete Feature
@app.delete("/api/features/{feature_id}")
def delete_feature(feature_id: int):
    if feature_id in features:
        deleted_feature = features.pop(feature_id)
        return {
            "message": "Feature Deleted Successfully",
            "feature": deleted_feature
        }
    return {"message": "Feature not found"}