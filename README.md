Open Music API
---
## Registrasi dan Autentikasi Pengguna

![alt text](https://github.com/vinsensiuschristo/OpenMusic-API/blob/main/image/Dicoding-v2-01.png?raw=true)

---

## Pengelolaan Data Playlist

![alt text](https://github.com/vinsensiuschristo/OpenMusic-API/blob/main/image/Dicoding-v2-02.png?raw=true)
---

## Menerapkan Data Validation

Menerapkan proses Data Validation pada Request Payload sesuai spesifikasi berikut:

- POST /users:
    - username : string, required.
    - password : string, required.
    - fullname : string, required.


- POST /authentications:
    - username : string, required.
    - password : string, required.


- PUT /authentications:
  - refreshToken : string, required.


- DELETE /authentications:
  - refreshToken : string, required.


- POST /playlists:
  - name : string, required.


- POST /playlists/{playlistId}/songs
  - songId : string, required.

---
## Ekspor Lagu Pada Playlist

**URL** : `/export/playlists/{playlistId}`

**Method** : `POST`

**Data constraints**

```json
{
  "targetEmail": string
}
```

**Data example**

```json
{
  "targetEmail": emailuser@gmail.com
}
```

## Respon Sukses

**Code** : `200 OK`

**Content example**

```json
{
  "status": "success",
  "message": "Permintaan Anda sedang kami proses",
}
```

## Struktur data JSON yang diekspor adalah seperti ini:

**Code** : `200 OK`

**Content example**

```json
{
  "playlist": {
    "id": "playlist-Mk8AnmCp210PwT6B",
    "name": "My Favorite Coldplay Song",
    "songs": [
      {
        "id": "song-Qbax5Oy7L8WKf74l",
        "title": "Life in Technicolor",
        "performer": "Coldplay"
      },
      {
        "id": "song-poax5Oy7L8WKllqw",
        "title": "Centimeteries of London",
        "performer": "Coldplay"
      },
      {
        "id": "song-Qalokam7L8WKf74l",
        "title": "Lost!",
        "performer": "Coldplay"
      }
    ]
  }
}
```

---

## Mengunggah Sampul Album

API untuk mengunggah sampul album

**URL** : `/albums/{id}/covers`

**Method** : `POST`

**Data constraints**

```json
{
  "cover": file
}
```

## Respon Sukses

**Code** : `201 OK`

**Content example**

```json
{
  "status": "success",
  "message": "Sampul berhasil diunggah"
}
```

## Respons yang akan dikembalikan oleh endpoint GET /albums/{id}:

**Code** : `200 OK`

**Content example**

```json
{
  "status": "success",
  "data": {
    "album": {
      "id": "album-Mk8AnmCp210PwT6B",
      "name": "Viva la Vida",
      "coverUrl": "http://...."
    }
  }
}
```


---

## Endpoint Likes Album
![alt text](https://github.com/vinsensiuschristo/OpenMusic-API/blob/main/image/Dicoding-Fundamental-Backend.png?raw=true)

---

## Server-side Cache

- Menerapkan server-side cache pada jumlah yang menyukai sebuah album (GET /albums/{id}/likes).
- Cache bertahan selama 30 menit.
- Respons yang dihasilkan dari cache memiliki custom header properti X-Data-Source bernilai “cache”.
- Cache dihapus setiap kali ada perubahan jumlah like pada album dengan id tertentu.
- Memory caching engine menggunakan Redis.

---