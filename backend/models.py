from sqlalchemy import Column, Integer, String
from database import Base

class Feature(Base):
    __tablename__ = "features"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String, nullable=False)

    description = Column(String, nullable=False)

    image = Column(String, nullable=True)