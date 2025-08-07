from pydantic import BaseModel
from typing import List, Optional

class CampaignInput(BaseModel):
    product: str
    target_industry: str
    job_roles: List[str]
    company_size: str
    region: str
    goal: str
    brand_voice: str
    triggers: Optional[List[str]] = []
