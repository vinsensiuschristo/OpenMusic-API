# Open Music API

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



## Menambah Album Like

API menambahkan like pada album

**URL** : `/albums/{id}/likes`

**Method** : `POST`

## Respon Sukses

**Code** : `201 OK`

**Content example**

```json
{
  "status": "success",
  "message": "Like Berhasil Ditambahkan"
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
