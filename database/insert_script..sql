INSERT INTO public."FileHandlers"(
	id, "fileUrl", "createdAt", "updatedAt")
	VALUES (?, ?, ?, ?);


INSERT INTO public."CronSchemas"(
	id, name, expression, "cronModule", "createdAt", "updatedAt")
	VALUES (?, ?, ?, ?, ?, ?);
