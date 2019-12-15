from flask import Flask, jsonify, Response
import datetime
import random
import generateData as gd
import json

app = Flask(__name__)


@app.route('/')
def getLiveData():
    try:
        data = gd.generateSimulationData()
        js = json.dumps({
            "status": "success",
            "data": data
        })

        resp = Response(js, status=200, mimetype='application/json')
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp

    except Exception as e:

        data = []
        js = json.dumps({
            "status": "failure",
            "data": [],
            "error": e
        })
        resp = Response(js, status=404, mimetype='application/json')
        resp.headers['Access-Control-Allow-Origin'] = '*'
        return resp
