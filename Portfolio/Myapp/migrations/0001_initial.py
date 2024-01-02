# Generated by Django 5.0 on 2024-01-02 09:27

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Datas",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=250)),
                ("img", models.ImageField(upload_to="pics")),
                ("course", models.CharField(max_length=250)),
                ("institute", models.CharField(max_length=250)),
                ("year", models.DateField()),
                ("mark", models.CharField(max_length=250)),
            ],
        ),
    ]