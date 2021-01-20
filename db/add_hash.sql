insert into user_hash (username_id, hash)
values ($1, $2);

select * from user_username uu
left join user_info ui using(username_id)
where uu.username_id = $1;