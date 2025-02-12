
create database if not exists B_tech;
use B_tech;

create table Students(
roll_id int primary key,
name varchar(20),
year int not null,
mobile bigint(10) unsigned not null,
email varchar(50)
);

select  * from students;


insert into students
(roll_id,name,year,mobile,email)
values
(102,"Ankit",2025,9060782203,"ankit45@gmail.com"),
(103,"Rupak",2025,8083818321,"rupak56@gmail.com");

insert into students
(roll_id,name,year,mobile,email)
values
(104,"Shishir ranjan",2025,9304214859,"shishir97646@gmail.com");

select * from students;
alter table students drop email;