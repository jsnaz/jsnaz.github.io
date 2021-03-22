---
title: "Audiobook Dashboard"
path: projects/audio-book
tags: [javascript, html,css]
cover: ./History-of-Audiobooks.png
date: 2018-12-20
excerpt: Data was from an Audiobook provider selling at an online market place. Data is composed of the information on sales and reviews that we'll use to determine its correlation and how average review change overtime.
---
## Context of the Project

### Data Source
Data was from a company that has produced several audio books and has been selling them in an online marketplace. Reviews is one of the components of this marketplace which I used to determine its correlation to Audiobook sales.

In this project, I have used two CSV files; one about sales and another one that contains information about reviews. I used MySQLWorkbench to visualize their respective schema.
-photo SQL Table-

Since the "date_of_purchase" column shows a vector number 5-digit number, I converted it into date format using the code below to be more comprehensible. 


``` sql
SELECT 
    Date_of_Purchase, 
    Audiobook_name, 
    Transaction_ID,
    DATE('1899-12-30') + INTERVAL Date_of_Purchase DAY AS readable_date
FROM Audiobook.sales
-- Only keep the rows whose the 5-digits date is valid
WHERE Date_of_Purchase REGEXP '^[0-9]{5}$'
LIMIT 100;
```




### Dashboard
Using Tableau, I created a dashboard that would allow the management team to learn if the number of reviews the company receives has been growing.  This also gives an at a glance snapshot of how the average review scores change overtime, the percentage breakdown of the type of reviews, and the percentage of people acquiring an audio who left a review.

### Business Insights
We will be able to answer some business questions using the dashboard that could help in decision making.

--mind map--
