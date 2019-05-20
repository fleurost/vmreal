/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Create Data Medis
 * @param {org.hospital.record.CreateData} tx
 * @transaction
 */

async function CreateData(tx) {
    const factory = getFactory();
    let newData = factory.newResource('org.hospital.record', 'DataMedis', tx.noRekMedis);

    newData.pasien = tx.pasien;
    newData.dokter = tx.dokter;
    newData.tglMasuk = tx.tglMasuk;
    newData.tglKeluar = tx.tglKeluar;
    newData.alasanMasuk = tx.alasanMasuk;
    newData.rujukan = tx.rujukan;
    newData.anamnesis = tx.anamnesis;
    newData.pemeriksaanFisik = tx.pemeriksaanFisik;
    newData.riwayatAlergi = tx.riwayatAlergi;
    newData.diagnosaPrimer = tx.diagnosaPrimer;
    newData.diagnosaSekunder = tx.diagnosaSekunder;
    newData.terapiDiRs = tx.terapiDiRs;
    newData.tindakan = tx.tindakan;
    newData.prognosaPenyakit = tx.prognosaPenyakit;
    newData.alasanPulang = tx.alasanPulang;
    newData.kondisiSaatPulang = tx.kondisiSaatPulang;
    newData.rencanaTindakLanjut = tx.rencanaTindakLanjut;

    return getAssetRegistry('org.hospital.record.DataMedis')
        .then(function(dataRegistry){
            return dataRegistry.add(newData);
        })
        .catch(function(error){
            console.log(error);
        })
}

/**
 * Update Data Medis
 * @param {org.hospital.record.UpdateData} tx
 * @transaction
 */
async function UpdateData(tx) {
    tx.datamedis.pasien = tx.newPasien;
    tx.datamedis.dokter = tx.newDokter;
    tx.datamedis.tglMasuk = tx.newTglMasuk;
    tx.datamedis.tglKeluar = tx.newTglKeluar;
    tx.datamedis.alasanMasuk = tx.newAlasanMasuk;
    tx.datamedis.rujukan = tx.newRujukan;
    tx.datamedis.anamnesis = tx.newAnamnesis;
    tx.datamedis.pemeriksaanFisik = tx.newPemeriksaanFisik;
    tx.datamedis.riwayatAlergi = tx.newRiwayatAlergi;
    tx.datamedis.diagnosaPrimer = tx.newDiagnosaPrimer;
    tx.datamedis.diagnosaSekunder = tx.newDiagnosaSekunder;
    tx.datamedis.terapiDiRs = tx.newTerapiDiRs;
    tx.datamedis.tindakan = tx.newTindakan;
    tx.datamedis.prognosaPenyakit = tx.newPrognosaPenyakit;
    tx.datamedis.alasanPulang = tx.newAlasanPulang;
    tx.datamedis.kondisiSaatPulang = tx.newKondisiSaatPulang;
    tx.datamedis.rencanaTindakLanjut = tx.newRencanaTindakLanjut;

    return getAssetRegistry('org.hospital.record.DataMedis')
        .then(function(dataRegistry){
            return assetRegistry.update(tx.datamedis);
        })
        .catch(function(error){
            console.log(error);
        })
}

