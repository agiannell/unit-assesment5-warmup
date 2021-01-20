insert into user_username (username)
values ($1)
returning username_id;
