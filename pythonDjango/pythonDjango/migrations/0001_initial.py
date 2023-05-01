# Generated by Django 4.2 on 2023-04-30 23:00

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('user_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('user_email', models.EmailField(max_length=254, unique=True, verbose_name="The user's email")),
                ('user_name', models.CharField(max_length=50, verbose_name="The user's name")),
                ('character_name', models.CharField(max_length=50, verbose_name="The user's character name")),
                ('image', models.CharField(max_length=50, verbose_name="The user's character image")),
                ('ship_url', models.URLField(verbose_name='The ship image url')),
                ('color', models.CharField(max_length=50, verbose_name="The user's color")),
                ('enabled', models.BooleanField(default=True)),
                ('complete', models.BooleanField(default=False)),
            ],
        ),
    ]