-- Add Users
insert into users (user_id, first_name, last_name, gender, user_name, password) values (1,"Chae","Kim","Male","chae@yahoo.com","Dallas28");
insert into users (user_id, first_name, last_name, gender, user_name, password) values (2,"Akhila","Naik","Female","akhila@gmail.com","Shopping99");
insert into users (user_id, first_name, last_name, gender, user_name, password) values (3,"Eric","Stanley","Male","eric@gmail.com","javascript01");
insert into users (user_id, first_name, last_name, gender, user_name, password) values (4,"John","Shari","Male","john@outlook.com","workout11");

-- Add Biometrics
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2001,1,"2017-12-01",160,0.1,0.8,0.15,0.09);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2002,1,"2017-12-02",159.5,0.1,0.8,0.15,0.09);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2003,1,"2017-12-03",161,0.1,0.8,0.15,0.09);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2004,1,"2017-12-04",160,0.1,0.8,0.15,0.09);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2005,2,"2017-12-01",105,0.08,0.9,0.05,0.1);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2006,2,"2017-12-02",104.5,0.08,0.9,0.05,0.1);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2007,2,"2017-12-03",105.2,0.08,0.9,0.05,0.1);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2008,2,"2017-12-04",104,0.08,0.9,0.05,0.1);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2009,2,"2017-12-05",103.9,0.08,0.9,0.05,0.1);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2010,3,"2017-12-01",200,0.05,0.92,0.06,0.11);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2011,3,"2017-12-02",201,0.05,0.92,0.06,0.11);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2012,3,"2017-12-03",200,0.05,0.92,0.06,0.11);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2013,3,"2017-12-04",199,0.05,0.92,0.06,0.11);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2014,3,"2017-12-05",201.5,0.05,0.92,0.06,0.11);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2015,3,"2017-12-06",202,0.05,0.92,0.06,0.11);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2016,4,"2017-12-01",199,0.07,0.95,0.1,0.08);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2017,4,"2017-12-02",198,0.07,0.95,0.1,0.08);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2018,4,"2017-12-03",197,0.07,0.95,0.1,0.08);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2019,4,"2017-12-04",196,0.07,0.95,0.1,0.08);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2020,4,"2017-12-05",195,0.07,0.95,0.1,0.08);
insert into biometrics (biometrics_id,user_id,date,weight,body_fat,muscle_mass,body_water,bone_mass) values (2021,4,"2017-12-06",196,0.07,0.95,0.1,0.08);

-- Add Workoutdata
insert into workoutdata (user_id,date,exercise,exercise_weight,reps) values (1,"2017-12-01","military press",135,10);
insert into workoutdata (user_id,date,exercise,exercise_weight,reps) values (1,"2017-12-01","military press",135,10);
insert into workoutdata (user_id,date,exercise,exercise_weight,reps) values (1,"2017-12-01","military press",135,10);
insert into workoutdata (user_id,date,exercise,exercise_weight,reps) values (1,"2017-12-01","bench press",155,12);
insert into workoutdata (user_id,date,exercise,exercise_weight,reps) values (1,"2017-12-01","bench press",155,12);
insert into workoutdata (user_id,date,exercise,exercise_weight,reps) values (1,"2017-12-01","bench press",155,12);
insert into workoutdata (user_id,date,exercise,exercise_weight,reps) values (1,"2017-12-01","leg press",355,8);
insert into workoutdata (user_id,date,exercise,exercise_weight,reps) values (1,"2017-12-01","leg press",355,8);
insert into workoutdata (user_id,date,exercise,exercise_weight,reps) values (1,"2017-12-01","leg press",355,8);
insert into workoutdata (user_id,date,exercise,exercise_weight,reps) values (1,"2017-12-01","squats",230,10);
insert into workoutdata (user_id,date,exercise,exercise_weight,reps) values (1,"2017-12-01","squats",230,10);
insert into workoutdata (user_id,date,exercise,exercise_weight,reps) values (1,"2017-12-01","squats",230,10);

