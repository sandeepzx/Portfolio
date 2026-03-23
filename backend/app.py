import os
from dotenv import load_dotenv
from pymongo import MongoClient
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Optional

load_dotenv()
mongo_uri = os.getenv("MONGODB_URI")
client = MongoClient(mongo_uri)
db = client["portfoliodb"]

institutions_col = db["institutes"]
seasons_col = db["seasons"]
projects_col = db["projects"]

ENV = os.getenv("APP_ENV", "development")

app = FastAPI(
    title="Portfolio API",
    docs_url=None if ENV == "production" else "/docs",
    redoc_url=None if ENV == "production" else "/redoc",
    openapi_url=None if ENV == "production" else "/openapi.json"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Schemas

class Institution(BaseModel):
    id: int
    type: str = "education"
    institution: str
    role: str
    description: str
    from_date: str = Field(..., alias="from")
    to_date: str = Field(..., alias="to")
    metrics: str
    location: str
    skills: List[str]

class Season(BaseModel):
    id: int
    from_year: int = Field(..., alias="from")
    to_year: int = Field(..., alias="to")
    under: int

class Project(BaseModel):
    id: int
    jercy: int
    title: str
    sub: str
    from_date: str = Field(..., alias="from")
    to_date: str = Field(..., alias="to")
    isActive: bool = True
    description: str
    features: List[str]
    note: Optional[str] = ""
    techStack: List[str]
    githubLink: str
    linkedinLink: str
    under: int


@app.get('/')
def home():
    return {"message": "Hello this is a Portfolio website"}

# Institutions
@app.post("/institutions/")
async def add_institution(data: Institution):
    doc = data.dict(by_alias=True)
    institutions_col.insert_one(doc)
    return {"message": "Institution added"}

@app.get("/institutions/", response_model=List[Institution])
async def get_institutions():
    return list(institutions_col.find({}, {"_id": 0}))

# Seasons
@app.post("/seasons/")
async def add_season(data: Season):
    doc = data.dict(by_alias=True)
    seasons_col.insert_one(doc)
    return {"message": "Season added"}

@app.get("/seasons/", response_model=List[Season])
async def get_seasons():
    return list(seasons_col.find({}, {"_id": 0}))

# Projects
@app.post("/projects/")
async def add_project(data: Project):
    doc = data.dict(by_alias=True)
    projects_col.insert_one(doc)
    return {"message": "Project added"}

@app.get("/projects/", response_model=List[Project])
async def get_projects():
    return list(projects_col.find({}, {"_id": 0}))

@app.post("/projects/bulk")
async def add_projects_bulk(data: List[Project]):
    docs = [p.model_dump(by_alias=True) for p in data]
    result = projects_col.insert_many(docs)
    return {
        "message": "Projects added",
        "count": len(result.inserted_ids)
    }

# Custom
@app.get("/projects/season/{season_id}", response_model=List[Project])
async def get_projects(season_id:int):
    return list(projects_col.find({"under" : season_id}, {"_id": 0}))

@app.get("/institution/{item_id}", response_model=Institution)
async def get_institutions(item_id:int):
    institution = institutions_col.find_one({"id": item_id})

    if institution is None:
        raise HTTPException(status_code=404, detail="Institution not found")

    return institution

@app.get("/project/{item_id}", response_model=Project)
async def get_institutions(item_id:int):
    project = projects_col.find_one({"id": item_id})

    if project is None:
        raise HTTPException(status_code=404, detail="Project not found")

    return project
