from pydantic import BaseModel

class FeatureBase(BaseModel):
    title: str
    description: str
    image: str | None = None


class FeatureCreate(FeatureBase):
    pass


class FeatureResponse(FeatureBase):
    id: int

    class Config:
        from_attributes = True