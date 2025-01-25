run:
	cd backend && python manage.py runserver

migrate:
	cd backend && python manage.py migrate

makemigrations:
	cd backend && python manage.py makemigrations

install:
	cd backend && pip install -r requirements.txt

ps:
	docker compose ps

up:
	docker compose up -d

stop:
	docker compose stop

rm: stop
	docker compose rm -f
