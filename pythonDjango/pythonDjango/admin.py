from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .settings.models import User

class UserAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'user_email', 'user_name', 'character_name', 'image', 'ship_url', 'color', 'enabled', 'complete')

# Register your models here.

admin.site.register(User, UserAdmin)