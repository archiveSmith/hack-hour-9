/*

security.js


Weaknesses
	req body
	req header
	query strings
	etc

Mass Assignment
	active record pattern abused to expose private info
	
	Be Explicit
		whitelist fields to be mass assigned
		blacklist fields that cant
		DTO
			only expose mutable fields

Direct Object Reference
	identifier, used in route is exposed to users
	GET api.com/user/13

Cookie poisoning
	modify cookie to get unauthorized user info
	encrypt your cookies

User Enumeration
	reveal account owner by exposing too much info in errors and feedback
		probe for valid user
		analyze urls and redirections
		analyze error codes on login pages

More
	XSS
	SQL injection
	CSRF
	DoS








*/



// mass assignment isAdmin
create: (req, res) => {
	const newUser = new User(req.body);
	newUser.save();
}

// blacklisting
create: (req, res) => {
	delete req.body.isAdmin;
	const newUser = new User(req.body);
	newUser.save();
}


// whitelisting
create: (req, res) => {
	delete req.body.isAdmin;
	const newUser = new User({
		username: req.body.username;
		password: req.body.password;
	});
	newUser.save();
}















































