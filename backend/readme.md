# Shopix Backend

create virtualenv and use.

Replace the `~/tmp/venvs/shopix` path with where you want to keep your venv.

```sh
python -m venv ~/tmp/venvs/shopix
```

Use the virtualenv

```sh
source ~/tmp/venvs/shopix/bin/activate
```

DB connectivity

```sh
psql 'postgresql://shopix:shopix@localhost:5432/shopix'
```

## Products

- [x] connect to postgres
- [ ] create a products app
- [ ] Hook django rest for API
- [ ] Add model

Product

- id
- name
- description
- timestamps
- price
- user_id
- count

 id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)