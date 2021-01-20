select * from user_info ui
join user_username uu using(username_id)
where uu.username_id = $1