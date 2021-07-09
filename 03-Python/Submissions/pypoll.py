# First we'll import the os module
# This will allow us to create file paths across operating systems
import os
# Module for reading CSV files
import csv
import numpy as np

# FIGURE OUT THE FILEPATH ON YOUR COMPUTER
csvpath = "PyPoll\\Resources\\election_data.csv"
# read in the CSV data into memory - a list of lists
with open(csvpath) as csvfile:

    # CSV reader specifies delimiter and variable that holds contents
    csvreader = csv.reader(csvfile, delimiter=',')

    # Read the header row first (skip this step if there is now header)
    csv_header = next(csvreader)
    # print(f"CSV Header: {csv_header}")

    # store all my rows as a list of lists
    all_rows = []
    for row in csvreader:
        # clean rows and cast the second column to an integer
        temp_row = row
        temp_row[0] = int(temp_row[0])

        all_rows.append(temp_row)

total_votes = len(all_rows)

#prints total votes for election, 3,521,001
print(total_votes)

votes = {}

for row in all_rows:
    candidate = row[2]

    if candidate in votes.keys():

        votes[candidate] += 1
    else:
        votes[candidate] = 1
# Separates votes out by candidate and shows order of winners. Khan won election with 2,218,321
print(votes)

# get winner (hacky), will also try Kelli's way as soon as I figure out what she googled.
max_politician = ""
init_votes = 0
for dude in votes.keys():
    votes_won = votes[dude]
    if votes_won > init_votes:
        init_votes = votes_won
        max_politician = dude

print(max_politician)


# Writes path to text file to summarize data
out_path =  "pypoll.txt"
with open(out_path, "w") as f:
    f.write(f"Election Results\n")
    f.write(f"----------------------------\n")
    f.write(f"Total Votes: {total_votes}\n")
    f.write(f"----------------------------\n")

# Gets percentage of all votes for candidate and then total votes for each individual candidate
    for dude in votes.keys():
        f.write(f"{dude}: {round(votes[dude]/total_votes * 100)}% ({votes[dude]})\n")

    f.write(f"----------------------------\n")
    f.write(f"Winner: {max_politician}\n")
    f.write(f"----------------------------\n")