# Probolinggo Digital

Situs web dimana kita bisa mencari para penggiat IT yang ada di Kota Probolinggo.

## Teknologi Yang dipakai

### Frontend:

-   Next.js
-   GraphQL
-   TypeScript
-   Ant Design

### Backend

-   GraphQL (hasura.io)

## Port yang dipakai

-   Frontend: `3000`
-   Backend: `8080`

## Cara jalankan Project di Local

-   Pastikan [docker](https://docs.docker.com/get-docker/) dan [hasura CLI](https://hasura.io/docs/1.0/graphql/core/hasura-cli/install-hasura-cli.html) sudah terinstall di komputer. Baru pertama kali menggunakan Docker? Silahkan baca catatan simple mengenai Docker [di sini.](https://github.com/fanyspenda/learn-docker)
-   Buat image file dari frontend folder(`www/`).

```cli
$ sudo docker build -t fanyspenda/nextjs-md .
```

-   Jalankan `docker-compose.yml` yang ada pada direktori terluar dengan perintah `sudo docker-compose up -d`. Dengan begitu, service hasura local dan frontend harusnya telah berjalan.

> **Note:**
>
> apabila ingin melakukan pengembangan frontend, maka tidak perlu membuat image file frontend. Cukup masuk ke direktori `www/` dan jalankan frontend dengan `npm run dev`. Kemudian, jalankan `docker-compose.yml` yang ada **di folder** `hasura/`, **bukan yang di folder terluar**.

```cli

<!-- apply migration and seeding -->
$ hasura migrate apply --endpoint http://localhost:8080 --admin-secret "adminsecret"

<!-- apply metadata -->
$ hasura metadata apply --endpoint http://localhost:8080 --admin-secret "adminsecret"

```

-   Masuk ke direktori `hasura/` dan gunakan hasura CLI untuk mengimplementasikan **migration** agar tabel dan isi dari tabel (_seeding_) diimport ke service backend yang sedang berjalan.
-   Implementasikan **metadata** untuk memberi informasi mengenai tabel (agar tidak masuk dalam `untracked table`).
-   Masukkan perintah `hasura console --admin-secret "adminsecret"` untuk mengaktifkan GUI dari hasura. Cek apakah query dan tabel sudah tersedia atau belum.
