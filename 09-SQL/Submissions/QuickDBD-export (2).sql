﻿-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "Employee" (
    "emp_no" int   NOT NULL,
    "emp_title" varchar(10)   NOT NULL,
    "birth_date" datetime   NOT NULL,
    "firt_name" varchar(50)   NOT NULL,
    "last_name" varchar(50)   NOT NULL,
    "sex" varchar(5)   NOT NULL,
    "hire_date" datetime   NOT NULL,
    "last_updated" datetime   NOT NULL,
    CONSTRAINT "pk_Employee" PRIMARY KEY (
        "emp_no"
     )
);

CREATE TABLE "department" (
    "dept_no" varchar(5)   NOT NULL,
    "dept_name" varchar(50)   NOT NULL,
    "last_updated" datetime   NOT NULL,
    CONSTRAINT "pk_department" PRIMARY KEY (
        "dept_no"
     )
);

CREATE TABLE "dept_emp" (
    "emp_no" int   NOT NULL,
    "dept_no" varchar(5)   NOT NULL,
    "last_updated" datetime   NOT NULL,
    CONSTRAINT "pk_dept_emp" PRIMARY KEY (
        "emp_no","dept_no"
     )
);

CREATE TABLE "dept_manager" (
    "dept_no(5)" varchar   NOT NULL,
    "emp_no" int   NOT NULL,
    "last_updated" datetime   NOT NULL
);

CREATE TABLE "salaries" (
    "emp_no" int   NOT NULL,
    "salary" int   NOT NULL,
    "last_updated" datetime   NOT NULL,
    CONSTRAINT "pk_salaries" PRIMARY KEY (
        "emp_no"
     )
);

CREATE TABLE "titles" (
    "title_id" varchar(10)   NOT NULL,
    "title" varchar(20)   NOT NULL,
    "last_updated" datetime   NOT NULL,
    CONSTRAINT "pk_titles" PRIMARY KEY (
        "title_id"
     )
);

ALTER TABLE "Employee" ADD CONSTRAINT "fk_Employee_emp_title" FOREIGN KEY("emp_title")
REFERENCES "titles" ("title_id");

ALTER TABLE "dept_emp" ADD CONSTRAINT "fk_dept_emp_emp_no" FOREIGN KEY("emp_no")
REFERENCES "Employee" ("emp_no");

ALTER TABLE "dept_emp" ADD CONSTRAINT "fk_dept_emp_dept_no" FOREIGN KEY("dept_no")
REFERENCES "department" ("dept_no");

ALTER TABLE "dept_manager" ADD CONSTRAINT "fk_dept_manager_dept_no(5)" FOREIGN KEY("dept_no(5)")
REFERENCES "department" ("dept_no");

ALTER TABLE "dept_manager" ADD CONSTRAINT "fk_dept_manager_emp_no" FOREIGN KEY("emp_no")
REFERENCES "Employee" ("emp_no");

ALTER TABLE "salaries" ADD CONSTRAINT "fk_salaries_emp_no" FOREIGN KEY("emp_no")
REFERENCES "Employee" ("emp_no");

