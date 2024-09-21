"""
WSGI config for django_tour project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_tour.settings')


def application(environ, start_response):
    if environ['REQUEST_METHOD'] == 'OPTIONS':
        # Respuesta para las solicitudes preflight (OPTIONS)
        response_headers = [('Access-Control-Allow-Origin', '*'),
                            ('Access-Control-Allow-Methods', 'POST, OPTIONS'),
                            ('Access-Control-Allow-Headers', 'Content-Type')]
        start_response('200 OK', response_headers)
        print("a responder")
        return []

    _application = get_wsgi_application()
    return _application(environ, start_response)
