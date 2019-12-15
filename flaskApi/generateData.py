import datetime
import random


def generateSimulationData():
    end = datetime.datetime.now()
    start = end - datetime.timedelta(days=28)

    delta = datetime.timedelta(days=1)
    data = []
    while start <= end:
        data.append({
            'x': str(start),
            'y': random.randint(10, 100)
        })
        start = start + delta

    return data


# print(generateSimulationData())
