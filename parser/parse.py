import csv, json
from os import listdir

#modified from https://www.geeksforgeeks.org/convert-csv-to-json-using-python/
def make_json(csvFilePath, jsonFilePath): 
      
    # create a dictionary 
    data = {} 
      
    # Open a csv reader called DictReader 
    with open(csvFilePath, encoding='utf-8-sig') as csvf: 
        csvReader = csv.DictReader(csvf) 
          
        # Convert each row into a dictionary  
        # and add it to data 
        for rows in csvReader: 
              
            # Assuming a column named 'Name' to 
            # be the primary key 
            key = rows['name']
            data[key] = rows
            data[key]['carouselImages'] = listdir(f"../public/img/{rows['shortName']}/") 
            # data[carouselImages] = listdir(f'./public/img/{rows['shortName']}') 
    # Open a json writer, and use the json.dumps()  
    # function to dump data 
    with open(jsonFilePath, 'w+', encoding='utf-8') as jsonf: 
        jsonf.write(json.dumps(data, indent=4)) 
          
# Driver Code 
  
# Decide the two file paths according to your  
# computer system 
csvFilePath = r'data.csv'
jsonFilePath = r'../src/data/data.json'

# Call the make_json function 
make_json(csvFilePath, jsonFilePath)
