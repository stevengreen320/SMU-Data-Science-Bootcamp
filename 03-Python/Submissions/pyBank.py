# First we'll import the os module
# This will allow us to create file paths across operating systems
import os
# Module for reading CSV files
import csv
import numpy as np

# FIGURE OUT THE FILEPATH ON YOUR COMPUTER
csvpath = "Resources\\budget_data.csv"

# read in the CSV data into memory - a list of lists
with open(csvpath) as csvfile:

    # CSV reader specifies delimiter and variable that holds contents
    csvreader = csv.reader(csvfile, delimiter=',')

    # Read the header row first (skip this step if there is now header)
    csv_header = next(csvreader)
    # print(f"CSV Header: {csv_header}")
    # Read each row of data after the heade

    # Store all rows into memory as list os lists
    all_rows = []
    for row in csvreader:
        temp_row = row
        temp_row[1] = int(temp_row[1])

        all_rows.append(row)

   
# print(all_rows)

# shows total months, effectively answering first question
total_months = len(all_rows)
# Total Months: 86

# uses list comprehension to find all values in second column
all_profits = [x[1] for x in all_rows]

# sums up all values from above answering the second question and giving us the total
sum_profits = sum(all_profits)
# Totaal: $38,382,578

changes = []
for i in range(len(all_rows) -1):
    current_profits = all_rows[i][1]
    next_profit = all_rows[i+1][1]

    change = next_profit - current_profits
    changes.append(change)

# print(sum(changes) / len(changes)) Way of calculating total changes without numpy
average_change = (np.mean(changes))

max_changes = max(changes)
min_changes = min(changes)

# print(max_changes)
# print(min_changes)

# Get max change index
max_change_index = (changes.index(max_changes) + 1)
max_month = (all_rows[max_change_index][0])

# Get min change index
min_change_index = (changes.index(min_changes) + 1)
min_month = (all_rows[min_change_index][0])

# print(min_month)
# Writes path to text file to summarize data
out_path =  "pybank.txt"
with open(out_path, "w") as f:
    f.write(f"Financial Analysis\n")
    f.write(f"----------------------------\n")
    f.write(f"Total Months: {total_months}\n")
    f.write(f"Total: ${sum_profits}\n")
    f.write(f"Average Change: ${round(average_change, 2)}\n")
    f.write(f"Greatest Increase in Profits: {max_month} (${max_changes})\n")
    f.write(f"Greatest Decrease in Profits: {min_month} (${min_changes})")