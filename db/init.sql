create table user_username (
    username_id serial primary key,
    username varchar
);

create table user_hash (
    hash_id serial primary key,
    username_id int references user_username(username_id),
    hash varchar(2000)
);

create table user_info (
    user_info_id serial primary key,
    username_id int references user_username(username_id),
    name varchar,
    email varchar
);