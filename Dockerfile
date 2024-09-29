# Используем официальный образ Python в качестве базового образа
FROM python
# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /django_tour

# Копируем файл requirements.txt внутрь контейнера
COPY requirements.txt ./
# Устанавливаем зависимости, описанные в файле requirements.txt

RUN pip install setuptools
RUN pip install -r requirements.txt