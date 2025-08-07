from fastapi import FastAPI
from app.routers import campaign, outreach, dashboard

app = FastAPI(title="LinkedIn Sales Automation Tool")

app.include_router(campaign.router)
app.include_router(outreach.router)
app.include_router(dashboard.router)
