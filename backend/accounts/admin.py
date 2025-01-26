from django.contrib import admin
from .models import CustomUser, Address

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name', 'phone_number')

@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    list_display = ('user', 'street', 'city', 'state', 'postal_code', 'country', 'is_default')
    list_filter = ('country', 'is_default')
    search_fields = ('user__email', 'street', 'city', 'state', 'postal_code')

