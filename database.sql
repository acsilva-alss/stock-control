create schema ecommerce;

create table ecommerce.item (
	id_item serial primary key,
	category text,
	description text,
	price numeric,
	width integer,
	height integer,
	length integer,
	weight integer
);

insert into ecommerce.item (category, description, price, width, height, length, weight) values ('Instrumentos Musicais', 'Guitarra', 1000, 100, 30, 10, 3);
insert into ecommerce.item (category, description, price, width, height, length, weight) values ('Instrumentos Musicais', 'Amplificador', 5000, 50, 50, 50, 20);
insert into ecommerce.item (category, description, price, width, height, length, weight) values ('Acessórios', 'Cabo', 30, 10, 10, 10, 1);

create table ecommerce.coupon (
	code text,
	percentage numeric,
	expire_date timestamp,
	primary key (code)
);

insert into ecommerce.coupon (code, percentage, expire_date) values ('VALE20', 20, '2022-10-10T10:00:00');
insert into ecommerce.coupon (code, percentage, expire_date) values ('VALE20_EXPIRED', 20, '2020-10-10T10:00:00');

create table ecommerce.order (
	id_order serial,
	coupon_code text,
	coupon_percentage numeric,
	code text,
	cpf text,
	issue_date timestamp,
	freight numeric,
	sequence integer,
	total numeric,
	primary key (id_order)
);

create table ecommerce.order_item (
	id_order integer,
	id_item integer,
	price numeric,
	quantity integer,
	primary key (id_order, id_item)
);

create table ecommerce.stock_entry (
	id_stock_entry serial,
	id_item integer, 
	operation text, 
	quantity integer,
	primary key (id_stock_entry)
);