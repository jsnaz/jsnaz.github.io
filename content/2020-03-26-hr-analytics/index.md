---
title: "HR Analytics"
path: projects/hr-analytics
tags: [SQL, Tableau]
cover: ./cover.png
date: 2018-12-20
excerpt: Data was from an Audiobook provider selling at an online market place. Data is composed of the information on sales and reviews that we'll use to determine its correlation and how average review change overtime.
---
##Dashboard

This dashboard creates a visualization that provides a breakdown between male and female employees working in the company for each year from 1990 as well as their annual average salary. The comparison between the number of male and female managers from different departments per year is also shown in this dashboard.

-code problem 1,2,3-

Furthermore, an SQL stored procedure was created to allow you to obtain the average male and female salary per department within a certain salary range (excluding those who earned less than $50,000  and not greater than  $90,000). 

-code problem 4-

Lastly, using the  filter allows you to see categorized results by department.

##Data

For this project, we used and modified a huge employee data set that was found on github. The database script has been re-organized in an SQL file that can be downloaded and run. Below is the code that creates the entire database from the first to the last piece. 

--Insert code--

Here are the following columns in the employee database with the respective schema.
