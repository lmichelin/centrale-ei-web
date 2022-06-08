import numpy as np
import pandas as pd
import os
from pymongo import MongoClient
import pymongo
from json import load
from json import dump
from dotenv import load_dotenv,find_dotenv
load_dotenv(find_dotenv())
DONGO_BD_URL = os.environ.get('MONGO_DB_URL')

def get_database():

    return []
with open('nom_file') as json_file:
    nom = load(json_file)

#######################################################################
data = pd.read_csv({})
#On considère que data contient les notes films/users
def recommendation(data):
    '''prend un tableau panda en entrée et renvoie la matrice de similarité utilisateur et la matrice de notations'''
    movie_matrix = data.pivot_table(index='user_id', columns='item_id', values='rating')#changer les noms de variables
    data_matrix = np.zeros((len(data), len(data[0])))
    for line in data.itertuples():
        data_matrix[line[1]-1, line[2]-1] = line[3]
    from sklearn.metrics.pairwise import pairwise_distances
    user_similarity = pairwise_distances(data_matrix, metric='cosine')
    return user_similarity,data_matrix

def predict(ratings, similarity, type='user'):
    '''prend la matrice des notes utilisateurs items et la matrice de similarité,
    renvoie la prédiction de notes'''
    if type == 'user':
        print(len(ratings[1]))
        mean_user_rating = ratings.mean(axis=1)
        #You use np.newaxis so that mean_user_rating has same format as ratings
        ratings_diff = (ratings - mean_user_rating[:, np.newaxis])
        pred = mean_user_rating[:, np.newaxis] + similarity.dot(ratings_diff) / np.array([np.abs(similarity).sum(axis=1)]).T
    elif type == 'item':
        pred = ratings.dot(similarity) / np.array([np.abs(similarity).sum(axis=1)])
    return pred