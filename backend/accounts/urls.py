from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from .views import (
    AddressListCreateView,
    AddressRetrieveUpdateDestroyView,
    CustomUserListCreateView,
    CustomUserRetrieveUpdateDestroyView,
    CustomTokenObtainPairView
)

urlpatterns = [
    path('users/', CustomUserListCreateView.as_view(), name='user-list-create'),
    path('users/<str:pk>/', CustomUserRetrieveUpdateDestroyView.as_view(), name='user-retrieve-update-destroy'),

    path('addresses/', AddressListCreateView.as_view(), name='address-list-create'),
    path('addresses/<str:pk>/', AddressRetrieveUpdateDestroyView.as_view(), name='address-retrieve-update-destroy'),

    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]