# SMU_Data_Science_Bootcamp

This Folder contains most of the assignments that were required in my Data Science bootcamp. This repo does not include projects that were required as well as two assignments that will be in the Websites Folder. I will list and explain each assignment below with the relative skills that were used and learned. 

## 01-Excel
The requirements for this assignment were to apply conditional formatting and create pivot tables to create categories in a dataset of past Kickstarter projects to make it easier to further analysis. The completed assignment and analysis of the data can be found here https://github.com/stevengreen320/SMU_June2021_Bootcamp_Homework/tree/main/01-Excel/Submissions 

![Screenshot (102)](https://user-images.githubusercontent.com/85272745/161706115-6114618a-a2c4-47f9-827a-4a2711bb189e.png)
![Screenshot (103)](https://user-images.githubusercontent.com/85272745/161706106-d707aeb4-4cc3-4858-b2a7-d2d81d8a460b.png)



## 02-VBA-Scripting
The goal of this assignment was to use VBA to analyze stock market data from a dataset. Requirements were to find each stock symbol, calculate the yearly change from beginning to end, calculating the percentage change of that stock and the total volume of that stock. Also, the goal was to write a summary of the analyzed data. The completed assignment and analysis of the data can be found here https://github.com/stevengreen320/SMU_June2021_Bootcamp_Homework/tree/main/02-VBA-Scripting/Submissions

![Screenshot (202)](https://user-images.githubusercontent.com/85272745/161712987-00b0cb3b-4319-439d-a48b-d3d6336feaa3.png)
![Screenshot (203)](https://user-images.githubusercontent.com/85272745/161712971-7a3b0833-26c6-44ed-a058-3b53d51275fa.png)
![Screenshot (204)](https://user-images.githubusercontent.com/85272745/161712976-59175d88-6e69-4f04-8a2b-e2ddef3e4704.png)
![Screenshot (205)](https://user-images.githubusercontent.com/85272745/161712981-6c89f5e8-92ee-497b-b74a-ddc707446b79.png)
![Screenshot (206)](https://user-images.githubusercontent.com/85272745/161712985-97a2e733-b047-4dea-83b7-623dee470957.png)
![Screenshot (104)](https://user-images.githubusercontent.com/85272745/161706109-a892381d-a29d-48ba-9e71-b834ee64be9b.png)

## 03-Python
The goal of this assignment was to write a Python script for analyzing the financial records of a company and the results of an election from given datasets, PyBank and PyPoll

PyBank
* This submission needed to include the total months of data, the net total of profit/loss, the average changes in profit and loss, and the greatest increase in profits and decrease in loss. 

PyPoll
* This submission needed to include the total number of votes cast, the total number of votes for each candidate and the winner of the election based on the data. 

Both submissions needed to have an exported text file with the results shown. The completed assignment can be found here. Used VS Code for this assignment 

https://github.com/stevengreen320/SMU_June2021_Bootcamp_Homework/tree/main/03-Python/Submissions 

![Screenshot (105)](https://user-images.githubusercontent.com/85272745/161706703-eef71611-659d-4e44-9648-c10aff86f5c5.png)
![Screenshot (106)](https://user-images.githubusercontent.com/85272745/161706707-bbaf37ee-b03f-4314-904d-4ae358e4ffc3.png)

## 04-Pandas
The goal of this assignment was to create an analysis of a video game information from a given dataset. Looking at it from the viewpoint of a Lead Analyst for company that makes the game. The requirements were to use the Pandas library to calculate the following

Player Count
* Total Number of Players

Purchasing Analysis (Total)
* Number of Unique Items
* Average Purchase Price
* Total Number of Purchases
* Total Revenue

Gender Demographics
* Percentage and Count of Male Players
* Percentage and Count of Female Players
* Percentage and Count of Other / Non-Disclosed

Purchasing Analysis (Gender)
* The below each broken by gender
  * Purchase Count
  * Average Purchase Price
  * Total Purchase Value
  * Average Purchase Total per Person by Gender

Age Demographics
* The below each broken into bins of 4 years (i.e., &lt;10, 10-14, 15-19, etc.)
  * Purchase Count
  * Average Purchase Price
  * Total Purchase Value
  * Average Purchase Total per Person by Age Group

Top Spenders
* Identify the top 5 spenders in the game by total purchase value, then list (in a table):
  * SN
  * Purchase Count
  * Average Purchase Price
  * Total Purchase Value

Most Popular Items
* Identify the 5 most popular items by purchase count, then list (in a table):
  * Item ID
  * Item Name
  * Purchase Count
  * Item Price
  * Total Purchase Value

Most Profitable Items
* Identify the 5 most profitable items by total purchase value, then list (in a table):
  * Item ID
  * Item Name
  * Purchase Count
  * Item Price
  * Total Purchase Value

All code was submitted using Jupyter notebooks and my submission can be found here. 
https://github.com/stevengreen320/SMU_June2021_Bootcamp_Homework/tree/main/04-Pandas/Submissions/HeroesOfPymoli 

![Screenshot (111)](https://user-images.githubusercontent.com/85272745/161706917-2fcb6472-9c02-467a-bacb-450212f8e782.png)
![Screenshot (112)](https://user-images.githubusercontent.com/85272745/161706922-a2a2a8c6-826b-4b21-803e-4829e0dfdfd8.png)
![Screenshot (113)](https://user-images.githubusercontent.com/85272745/161706925-0ce9fd31-cff5-4932-96e5-d4a2dd339a39.png)


## 05-Matplotlib
The goal of this assignment was to use Pandas and Matplotlib to create an analysis of given data with visualizations. The data was about mice in a fictional anti-cancer program. Instructions were to clean the data and remove duplicates, create bar charts, pie plots, boxplots and a correlation coefficient using the data. 
All of the code was submitted in Jupyter Notebooks and can be found here. https://github.com/stevengreen320/SMU_June2021_Bootcamp_Homework/tree/main/05-Matplotlib/Submissions/Pymaceuticals 

![Screenshot (114)](https://user-images.githubusercontent.com/85272745/161707142-f49292b5-dfb3-47a4-a617-aa3ce9571d8f.png)
![Screenshot (115)](https://user-images.githubusercontent.com/85272745/161707149-a4e121f4-2e56-45c8-b7b0-f707959785c9.png)

## 06-Python API 
The goal of this assignment was to call into the OpenWeatherMap API and get weather information for 500 cities at varying distances from the equator. The goal was to then create a comparison of different average weather indicators at different places and their latitude. After that, the instructions were to create scatter plots of the different indicators. Then use statmodels package to compare different indicators. The second part of the assignment was to then create a heatmap for the data use that data to find the best spot for a vacation with these requirements.


  * A max temperature lower than 80 degrees but higher than 70.

  * Wind speed less than 10 mph.

  * Zero cloudiness.

  * Drop any rows that don't contain all three conditions. You want to be sure the weather is ideal.

The code was submitted in Jupyter notebooks and VS Code and can be found here

https://github.com/stevengreen320/SMU_June2021_Bootcamp_Homework/tree/main/06-Python-APIs/Submissions 

![Screenshot (116)](https://user-images.githubusercontent.com/85272745/161707340-e7d96b55-5d78-4f25-bca8-c908c0df7e20.png)
![Screenshot (117)](https://user-images.githubusercontent.com/85272745/161707343-f5d0e7e0-8379-4a91-960e-ad052fa9e228.png)
![Screenshot (121)](https://user-images.githubusercontent.com/85272745/161707328-ca12a829-cca3-4769-bc52-bfb9831534f1.png)
![Screenshot (122)](https://user-images.githubusercontent.com/85272745/161707330-e7e109d0-1a58-47d1-8c85-c9942b6c2a9f.png)
![Screenshot (123)](https://user-images.githubusercontent.com/85272745/161707332-187e95ea-5e10-47f0-bcbd-9b7400c12849.png)
![Screenshot (124)](https://user-images.githubusercontent.com/85272745/161707337-34905413-5d74-4d2b-87d9-d75c167a9d2b.png)

## 09-SQL
The goal of this assignment was to use SQL to analyze given data.  Instructions included creating a ERD diagram of the data, and then make SQL queries into data about Employee records for a imaginary company. A more detailed version of the instructions are below. Once you have a complete database, do the following:

1. List the following details of each employee: employee number, last name, first name, sex, and salary.

2. List first name, last name, and hire date for employees who were hired in 1986.

3. List the manager of each department with the following information: department number, department name, the manager's employee number, last name, first name.

4. List the department of each employee with the following information: employee number, last name, first name, and department name.

5. List first name, last name, and sex for employees whose first name is "Hercules" and last names begin with "B."

6. List all employees in the Sales department, including their employee number, last name, first name, and department name.

7. List all employees in the Sales and Development departments, including their employee number, last name, first name, and department name.

8. In descending order, list the frequency count of employee last names, i.e., how many employees share each last name.

![Screenshot (107)](https://user-images.githubusercontent.com/85272745/161707631-ebf6bd88-875b-4c2d-9def-e93faa696f5d.png)
![Screenshot (108)](https://user-images.githubusercontent.com/85272745/161707632-ccf92d8b-7365-482c-9fac-51225ed4a3cf.png)

## 10-Advanced Data Storage and Retrieval
On this assignment I used my knowledge of SQLalchemy to query a database to get the average rainfall of Hawaii in different areas and at different times. Link is here https://github.com/stevengreen320/SMU_June2021_Bootcamp_Homework/tree/main/10-Advanced-Data-Storage-and-Retrieval/Submissions 

![Screenshot (186)](https://user-images.githubusercontent.com/85272745/161710361-f8386c43-97ca-4f0e-9549-eba6088e1926.png)
![Screenshot (187)](https://user-images.githubusercontent.com/85272745/161710359-bc61d91c-d4f5-435e-be04-7d4315e039da.png)
![Screenshot (188)](https://user-images.githubusercontent.com/85272745/161710354-330419e0-6eac-4ae3-80d2-b04f650792f5.png)
![Screenshot (189)](https://user-images.githubusercontent.com/85272745/161710349-1ef0e7d6-9ab3-408d-bfe7-a0bf7c95bef0.png)
![Screenshot (190)](https://user-images.githubusercontent.com/85272745/161710347-b5cdb44a-10c9-42a9-87f4-47cfc9931da8.png)
![Screenshot (191)](https://user-images.githubusercontent.com/85272745/161710344-e39fbb03-d5cc-4552-ae9b-a30ca9479e32.png)
![Screenshot (192)](https://user-images.githubusercontent.com/85272745/161710340-a68955ab-bc5b-48cc-b2be-855a21a6b975.png)
![Screenshot (193)](https://user-images.githubusercontent.com/85272745/161710368-52e3151c-0426-4fae-b78a-0e557cc57613.png)
![Screenshot (194)](https://user-images.githubusercontent.com/85272745/161710365-a84d4b0a-be84-4b53-8338-2f3bc877b775.png)


## 12-Web Scraping and Document Retrieval 
ON this assignment I used my knowledge of web scraping to scrape a website. I scraped table data, pictures, and information to create another site.  Link is here https://github.com/stevengreen320/SMU_June2021_Bootcamp_Homework/tree/main/12-Web-Scraping-and-Document-Databases/Submissions 
![Screenshot (160)](https://user-images.githubusercontent.com/85272745/161709128-8ba5e22b-b865-476f-8d82-90b11ae85a31.png)
![Screenshot (161)](https://user-images.githubusercontent.com/85272745/161709132-4b2c1fc4-ca99-41ec-a1e9-477c9feff91f.png)
![Screenshot (162)](https://user-images.githubusercontent.com/85272745/161709133-f28aea4e-d3d3-4969-9067-253c03e8d032.png)
![Screenshot (163)](https://user-images.githubusercontent.com/85272745/161709120-ee28fc5a-7ea6-4929-a8ae-98f99c69b1b5.png)
![Screenshot (164)](https://user-images.githubusercontent.com/85272745/161709124-72819b15-6803-486f-9825-74ef72fd4def.png)


## 14-Interactive Web Visualizations
On this assignment I used Plotly to create an interactive dashboard of some data of a belly button biodiversity dataset. The data were survey results of the frequency that participants wash their belly button.  Link is here https://github.com/stevengreen320/SMU_June2021_Bootcamp_Homework/tree/main/14-Interactive-Web-Visualizations/Submissions 
![Screenshot (6)](https://user-images.githubusercontent.com/85272745/161708952-e0e5aed7-b04e-415f-bb2e-2b8d1f0aa7c7.png)
![Screenshot (7)](https://user-images.githubusercontent.com/85272745/161708955-bcc0146a-8af4-404d-8fa7-aaa7288a1b8e.png)
![Screenshot (8)](https://user-images.githubusercontent.com/85272745/161708960-a09b5f7b-c365-4b8c-b109-265b9e4fa68c.png)

## 18-Tableau
On this assignment I used Tableau to analyze bike data in NYC for the Citibike program. Link is here https://github.com/stevengreen320/SMU_June2021_Bootcamp_Homework/tree/main/18-Tableau/Submissions 
 and here
https://public.tableau.com/app/profile/steven.green4340/viz/TableauHomework_16358103854900/RidershipStory 

![Screenshot (195)](https://user-images.githubusercontent.com/85272745/161712188-43380564-4cc1-4c15-8565-9c77cefa1561.png)
![Screenshot (196)](https://user-images.githubusercontent.com/85272745/161712191-79b0208a-70f6-4a11-bfd6-1907b3f985a3.png)
![Screenshot (197)](https://user-images.githubusercontent.com/85272745/161712193-c087c57a-47b7-4428-a4c4-270f47c39538.png)
![Screenshot (198)](https://user-images.githubusercontent.com/85272745/161712196-759b98de-39e8-421d-8eb6-e5bce237727e.png)
![Screenshot (199)](https://user-images.githubusercontent.com/85272745/161712203-c85d61cc-7cd3-4c75-9cb2-2cbd1eaa1484.png)
![Screenshot (200)](https://user-images.githubusercontent.com/85272745/161712207-7940c708-423c-4f45-a990-d31ec3b0ad75.png)
![Screenshot (201)](https://user-images.githubusercontent.com/85272745/161712209-e16f47b9-93f3-40d3-86c8-2bf536bcf577.png)

## 19-Supervised Machine Learning 
On this assignment I used supervised machine learning techniques to see if credit risk can be determined from a dataset of credit applicants Link is Here https://github.com/stevengreen320/SMU_June2021_Bootcamp_Homework/tree/main/19-Supervised-Machine-Learning/Submissions 
![Screenshot (165)](https://user-images.githubusercontent.com/85272745/161708781-ff7b9c61-47a8-4b6b-9550-bde768368ce2.png)
![Screenshot (166)](https://user-images.githubusercontent.com/85272745/161708783-8943fd8d-1dd0-4b8e-b2a5-8000ae8510e9.png)
![Screenshot (167)](https://user-images.githubusercontent.com/85272745/161708773-0cad8745-9c5f-43ba-a672-a641d8d4c594.png)
![Screenshot (168)](https://user-images.githubusercontent.com/85272745/161708776-e113ee87-6d91-4af0-aeaf-a92281c523f7.png)
![Screenshot (169)](https://user-images.githubusercontent.com/85272745/161708778-66111ca1-02de-40be-86b5-67d91d0f3ff2.png)

## 20-Unsupervised Machine Learning 
On this assignment, I used unsupervised machine learning to see if cryptocurrencies could be clustered and based on the given data which one is the most unique. Link is Here

https://github.com/stevengreen320/SMU_June2021_Bootcamp_Homework/tree/main/20-Unsupervised-Learning/Submissions 

![Screenshot (170)](https://user-images.githubusercontent.com/85272745/161708468-41fea088-1cf5-4e96-8a21-c908eed9be6a.png)
![Screenshot (171)](https://user-images.githubusercontent.com/85272745/161708471-62847b01-ae33-4dd9-85e1-2b6e6eeb6924.png)
![Screenshot (172)](https://user-images.githubusercontent.com/85272745/161708463-3e56c89a-e1cb-4ee5-9362-6f93b3335a3b.png)
![Screenshot (173)](https://user-images.githubusercontent.com/85272745/161708465-6407170e-92b7-45b2-8cb5-717186c5575b.png)
![Screenshot (175)](https://user-images.githubusercontent.com/85272745/161708466-d45a0e6d-f927-46e7-b8d5-76a39a95ac13.png)

## 21-Deep Learning
On this assignment, I used deep learning to see if I could train a model to see if charity could get funding and the threshold was to be 75% accurate with my learning. On this assignment, I learned about different optimizer algorithms. Link is here https://github.com/stevengreen320/SMU_June2021_Bootcamp_Homework/tree/main/21-Deep-Learning/Submissions 

![Screenshot (178)](https://user-images.githubusercontent.com/85272745/161707887-84cb9859-92c3-421a-9a53-549ca72e0aae.png)
![Screenshot (179)](https://user-images.githubusercontent.com/85272745/161707893-69342414-2b88-4ee1-ab33-44011c2ae9d4.png)
![Screenshot (180)](https://user-images.githubusercontent.com/85272745/161707874-776cf091-b46b-450c-a08c-4408e60de87e.png)
![Screenshot (181)](https://user-images.githubusercontent.com/85272745/161707878-194a32fa-a5d5-4973-adf0-617384098481.png)
![Screenshot (182)](https://user-images.githubusercontent.com/85272745/161707881-1a8b0cf3-256e-43f5-a06e-26e2a3086718.png)
![Screenshot (183)](https://user-images.githubusercontent.com/85272745/161707885-a706d828-259b-4b27-8605-2973b3d8b9af.png)
![Screenshot (109)](https://user-images.githubusercontent.com/85272745/161708189-54fc50c5-7404-4071-9b63-f052ec799ead.png)
![Screenshot (110)](https://user-images.githubusercontent.com/85272745/161708192-7cb8be43-dd72-4df3-a23c-6b5bad7766bf.png)


