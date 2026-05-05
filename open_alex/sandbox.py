import pandas as pd
import json
from dotenv import load_dotenv
import os
import requests


# Setup
print(os.getcwd())

ROOT = os.path.dirname(os.path.abspath(__name__))
env_path = os.path.join(ROOT, ".env")
print(env_path)
load_dotenv(os.path.join(ROOT, ".env"))
print(os.getenv("OPEN_ALEX_KEY"))


# Singleton works (papers)
base = 'https://api.openalex.org'
doi = 'https://doi.org/10.5304/jafscd.2024.141.011'
doi_short = 'doi:10.5304/jafscd.2024.141.011' # alternative
url = f'{base}/works/{doi}'
print(url)

# params = {"persistentId": os.getenv('DEMO_PID')}
# print(params)
# headers = {"X-Dataverse-key": os.getenv("API_KEY")}
# print(headers)

r = requests.get(
    url,
    # params=params,
    # headers=headers,
)
print(r)
type(r)
dir(r)

r.content
r.status_code
r.url
r.request
r.headers

# Format into JSON
data = r.json()
type(data)
print(data)
data.keys()

with open('open_alex/singleton_paper.json', 'w') as f:
    json.dump(data, f)


# Get authors only into DF
data['authorships']
authors = pd.DataFrame(data['authorships'])
authors.dtypes # still contains objects

authors = pd.json_normalize(data['authorships'], max_level=1)
authors.head()
authors.info()
