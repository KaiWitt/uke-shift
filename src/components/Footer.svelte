<script lang="ts">
    export let name: string;
    export let website: string;
    export let github: string;
</script>

<div>
    <p>
        Build by <a href={website}>{name}</a>
        <br />
        Source code on <a href={github}>GitHub</a>
    </p>
</div>

<style>
</style>
