# Model for an cloud service provder
import uuid
from django.db import models

# Create your models here.
class User(models.Model):

    user_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    user_email = models.EmailField("The user's email", max_length=254, unique=True)
    user_name = models.CharField("The user's name", max_length=50)
    character_name  = models.CharField("The user's character name", max_length=50)
    image  = models.CharField("The user's character image", max_length=50)
    ship_url = models.URLField("The ship image url", max_length=200)
    color  = models.CharField("The user's color", max_length=50)
    enabled = models.BooleanField(default=True)
    complete = models.BooleanField(default=False)

    def _str_(self):
        return self.title