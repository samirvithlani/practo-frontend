select * from appoinment inner join users on appoinment.user_id = users.user_id ;
select * from appoinment inner join users,doctor on appoinment.user_id = users.user_id and appoinment.doctor_id = doctor.doctor_id ;

inner join query from 3 tables
select * from appoinment inner join users on appoinment.user_id = users.user_id inner join doctor on appoinment.doctor_id = doctor.doctor_id ;

outer join query from 3 tables
select * from appoinment left join users on appoinment.user_id = users.user_id left join doctor on appoinment.doctor_id = doctor.doctor_id where;

outer join query from 3 tables with where clause
select * from appoinment left join users on appoinment.user_id = users.user_id left join doctor on appoinment.doctor_id = doctor.doctor_id where appoinment.doctor_id = 2;