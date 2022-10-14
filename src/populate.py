import boto3
from datetime import datetime
from botocore.exceptions import ClientError
import uuid

table_name = "items"

"""
    0 = Landfill
    1 = Recycling
    2 = Compost
    3 = Containers for Change
"""

items = [{
            "Id" : str(uuid.uuid4()),
            "Time" : datetime.utcnow().isoformat(),
            "Name" : "Bottle Cap",
            "Cost" : "$0.02",
            "BinNumber" : 1
        },
        {
            "Id" : str(uuid.uuid4()),
            "Time" : datetime.utcnow().isoformat(),
            "Name" : "Banana",
            "Cost" : "$1.26",
            "BinNumber" : 2
        },
        {
            "Id" : str(uuid.uuid4()),
            "Time" : datetime.utcnow().isoformat(),
            "Name" : "Plastick Fork",
            "Cost" : "$0.07",
            "BinNumber" : 1
        },
        {
            "Id" : str(uuid.uuid4()),
            "Time" : datetime.utcnow().isoformat(),
            "Name" : "Glass Bottle",
            "Cost" : "$0.13",
            "BinNumber" : 3
        },
        {
            "Id" : str(uuid.uuid4()),
            "Time" : datetime.utcnow().isoformat(),
            "Name" : "Bread",
            "Cost" : "$5.67",
            "BinNumber" : 0
        },
        {
            "Id" : str(uuid.uuid4()),
            "Time" : datetime.utcnow().isoformat(),
            "Name" : "Chocolate",
            "Cost" : "$4.60",
            "BinNumber" : 0
        },
        {
            "Id" : str(uuid.uuid4()),
            "Time" : datetime.utcnow().isoformat(),
            "Name" : "2L Milk Bottle",
            "Cost" : "$3.99",
            "BinNumber" : 1
        },
        {
            "Id" : str(uuid.uuid4()),
            "Time" : datetime.utcnow().isoformat(),
            "Name" : "Apple",
            "Cost" : "$0.80",
            "BinNumber" : 2
        },
        {
            "Id" : str(uuid.uuid4()),
            "Time" : datetime.utcnow().isoformat(),
            "Name" : "Glow Stick",
            "Cost" : "$1.57",
            "BinNumber" : 0
        },
        {
            "Id" : str(uuid.uuid4()),
            "Time" : datetime.utcnow().isoformat(),
            "Name" : "Coke Can",
            "Cost" : "$3.99",
            "BinNumber" : 3
        },
]

def main():
    dynamodb = boto3.resource('dynamodb')
    items_table = dynamodb.Table(table_name)
    for item in items:
        response = items_table.put_item(TableName=table_name, Item=item)

main()