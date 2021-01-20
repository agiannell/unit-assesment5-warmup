select * from user_username uu
join user_hash uh using(username_id)
where username_id = $1;