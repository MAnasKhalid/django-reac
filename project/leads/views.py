from leads.models import Lead
from leads.serializers import LeadSerializer
from rest_framework import generics
from rest_framework.generics import DestroyAPIView


class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

class DeleteLedgerCategory(DestroyAPIView):
    # queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Lead.objects.all().delete()
        return queryset

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     if instance.is_default == True:
    #         return Response("Cannot delete default system category", status=status.HTTP_400_BAD_REQUEST)
    #     self.perform_destroy(instance)