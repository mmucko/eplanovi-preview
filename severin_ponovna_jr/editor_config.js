/* ------------------------------------------------------------------
   ePlanovi editor — JEDINA datoteka koju treba mijenjati nakon uploada.
   ID PPUO Severin (1. ponovna JR, dashboard primjedbi Zavoda 23.10.2026.)

   MAX: u MAX_UUID upiši UUID iz SVOG editor linka
        (https://editor-ispu.gov.hr/prostorni-plan/<UUID>?...), umjesto TODO_MAX_UUID.
   Dok je MAX_UUID = "TODO_MAX_UUID", koristi se FALLBACK = pp_metadata.id iz GPKG-a
   20261026_154711_184 — taj UUID MOŽE dati „Pristup nije dozvoljen”
   (editor traži UUID verzije iz editor linka, ne pp_metadata.id).

   Svi linkovi „otvori u editoru” u kartama idu kroz editor.html → ovdje.
   ------------------------------------------------------------------ */
var MAX_UUID = "TODO_MAX_UUID";
var FALLBACK_UUID = "NG7wapFKMpAAqFjb6EBxQD";   // pp_metadata.id (privremeno; moguće „Pristup nije dozvoljen”)
window.EDITOR_UUID = (MAX_UUID.indexOf("TODO") === 0) ? FALLBACK_UUID : MAX_UUID;
