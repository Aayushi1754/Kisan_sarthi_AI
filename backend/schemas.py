from pydantic import BaseModel,Field

class FeatureCreate(BaseModel):
    title: str = Field(
        ...,
        min_length=3,
        max_length=100,
        description="Title of the feature"
    )

    description: str = Field(
        ...,
        min_length=10,
        max_length=500,
        description="Feature description"
    )

    image: str | None = Field(
        default=None,
        description="Image URL"
    )


class FeatureResponse(BaseModel):
    id: int
    title: str
    description: str
    image: str | None = None

    class Config:
        from_attributes = True
from pydantic import BaseModel, EmailStr

class UserRegister(BaseModel):
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str


class UserResponse(BaseModel):
    id: int
    email: EmailStr

    class Config:
        from_attributes = True