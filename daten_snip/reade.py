import json

with open("person.json") as datafile:
    data = json.load(datafile)
    print(data)
    