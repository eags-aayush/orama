from sqlalchemy import Column, Integer, String, JSON
from app.database import Base

class Campaign(Base):
    __tablename__ = "campaigns"
    id = Column(Integer, primary_key=True, index=True)
    product = Column(String)
    target_industry = Column(String)
    job_roles = Column(JSON)
    company_size = Column(String)
    region = Column(String)
    goal = Column(String)
    brand_voice = Column(String)
    triggers = Column(JSON)
