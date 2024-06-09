<script lang="ts">
</script>

<form action="/api/images/users" method="post" enctype="multipart/form-data">
	<input type="file" id="image" name="image" accept=".jpg, .jpeg, .png" />
	<button type="submit">Upload</button>
</form>
