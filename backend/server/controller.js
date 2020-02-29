const express = require('express');
const router = express.Router();
const http = require('http');
var mysql = require('mysql');

var con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "desarrollo",
    database: 'intae',
    insecureAuth: true,
    multipleStatements: true
});

router.get('/get_usuarios', (req, res, next) => {
    var query = 'select codigo, usuario from usuarios';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.get('/get_usuario', (req, res, next) => {
    var query = 'select * from usuarios where codigo = ?';
    var values = [req.query.codigo];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.post('/insert_usuario', (req, res, next) => {
    var query = 'INSERT INTO `intae`.`usuarios` (`nombre`, `apellido`, `usuario`, `pass`, `correo`, `tipo`) VALUES (?,?,?,?,?,?)';
    var values = [req.body.nombre,
                req.body.apellido,
                req.body.usuario,
                req.body.pass,
                req.body.correo,
                req.body.tipo];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.put('/update_usuario', (req, res, next) => {
    var query = 'update usuarios set nombre = ?, apellido = ?, usuario = ?, pass = ?, correo = ?, tipo = ? where codigo = ?';
    var values = [req.body.nombre,
                req.body.apellido,
                req.body.usuario,
                req.body.pass,
                req.body.correo,
                req.body.tipo,
                req.body.codigo];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.delete('/delete_usuario', (req, res, next) => {
    var query = 'delete from usuarios where codigo = ?';
    var values = [req.query.codigo];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.get('/get_secciones', (req, res, next) => {
    var query = 'select * from seccion';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.post('/insert_aspectospersonales', (req, res, next) => {
    var query = 'INSERT INTO `aspectos personales` (`obs_residencias`, `cod_relaciones_sociales`, `cod_relaciones_amistosas`, `obs_relaciones_amistosas`, `obs_noviazgos`, `cod_mejor_amigo`, `cod_act_deportiva`, `obs_actividades_deportivas`, `cod_act_artistica`, `obs_actividades_artisticas`, `obs_religion`, `cod_problema_emocional`, `obs_ayudas`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
    var values = [req.body.obs_residencias,
                    req.body.cod_relaciones_sociales,
                    req.body.cod_relaciones_amistosas,
                    req.body.obs_relaciones_amistosas,
                    req.body.obs_noviazgos,
                    req.body.cod_mejor_amigo,
                    req.body.cod_act_deportiva,
                    req.body.obs_actividades_deportivas,
                    req.body.cod_act_artistica,
                    req.body.obs_actividades_artisticas,
                    req.body.obs_religion,
                    req.body.cod_problema_emocional,
                    req.body.obs_ayudas];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.delete('/delete_aspectospersonales', (req, res, next) => {
    var query = 'delete from `aspectos personales` where cod_aspectos_personal = ?';
    var values = [req.query.cod_aspectos_personal];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.put('/update_aspectospersonales', (req, res, next) => {
    var query = 'UPDATE `aspectos personales` SET `obs_residencias` = ?, `cod_relaciones_sociales` = ?, `cod_relaciones_amistosas` = ?, `obs_relaciones_amistosas` = ?, `obs_noviazgos` = ?, `cod_mejor_amigo` = ?, `cod_act_deportiva` = ?, `obs_actividades_deportivas` = ?, `cod_act_artistica` = ?, `obs_actividades_artisticas` = ?,  `obs_religion` = ?, `cod_problema_emocional` = ?, `obs_ayudas` = ? WHERE `cod_aspectos_personal` = ?';
    var values = [req.body.obs_residencias,
                    req.body.cod_relaciones_sociales,
                    req.body.cod_relaciones_amistosas,
                    req.body.obs_relaciones_amistosas,
                    req.body.obs_noviazgos,
                    req.body.cod_mejor_amigo,
                    req.body.cod_act_deportiva,
                    req.body.obs_actividades_deportivas,
                    req.body.cod_act_artistica,
                    req.body.obs_actividades_artisticas,
                    req.body.obs_religion,
                    req.body.cod_problema_emocional,
                    req.body.obs_ayudas,
                    req.body.cod_aspectos_personal];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.get('/get_aspectospersonales', (req, res, next) => {
    var query = 'select `aspectos personales`.`cod_aspectos_personal` as `Codigo Personal`,`aspectos personales`.`obs_residencias` as `Vive con`,`relaciones sociales`.`descripcion` as `Sociabilidad`,`relaciones amistosas`.`descripcion` as `Relación con quien vive`,`aspectos personales`.`obs_relaciones_amistosas` as `Observacion amistades`,`aspectos personales`.`obs_noviazgos` as `Observacion noviazgo`,`mejores amigos`.`descripcion` as `Mejor amigo`,`actividades deportivas`.`descripcion` as `Actividad deportiva`,`aspectos personales`.`obs_actividades_deportivas` as `Otro deporte`,`actividades artisticas`.`descripcion` as `Actividad artistica`,`aspectos personales`.`obs_actividades_artisticas` as `Otra arte`,`aspectos personales`.`obs_religion` as `Religion`,`problemas emocionales`.`descripcion` as `Problema Emocional`,`aspectos personales`.`obs_ayudas` as `En problemas acude a`  from `aspectos personales` join `relaciones sociales` on `aspectos personales`.`cod_relaciones_sociales` = `relaciones sociales`.`cod_relaciones_sociales` join `relaciones amistosas` on `aspectos personales`.`cod_relaciones_amistosas` = `relaciones amistosas`.`cod_relaciones_amistosas` join `mejores amigos` on `aspectos personales`.`cod_mejor_amigo` = `mejores amigos`.`cod_mejor_amigo` join `actividades deportivas` on `aspectos personales`.`cod_act_deportiva` = `actividades deportivas`.`cod_act_deportiva` join `actividades artisticas` on `aspectos personales`.`cod_act_artistica` = `actividades artisticas`.`cod_act_artistica` join `problemas emocionales` on `aspectos personales`.`cod_problema_emocional` = `problemas emocionales`.`cod_problema_emocional` where `aspectos personales`.`cod_aspectos_personal` = ?';
    var values = [req.query.cod_aspectos_personal];
    con.query(query, values, (err, result, fields) => { 
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.post('/insert_aspectospedagogicos', (req, res, next) => {
    var query = 'INSERT INTO `aspectos pedagogicos` (`motivos`, `codigo_escuela`, `codigo_rendimiento`, `cod_asignatura_dificultad`, `cod_asignatura_facilidad`, `codigo_estudio`, `cod_consideracion`, `obs_reportes`, `obs_expulsion`, `obs_reprobado`, `sexto_grado_cursado`, `ubicacion_centro_anterior`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';
    var values = [req.body.motivos,
                req.body.codigo_escuela,
                req.body.codigo_rendimiento,
                req.body.cod_asignatura_dificultad,
                req.body.cod_asignatura_facilidad,
                req.body.codigo_estudio,
                req.body.cod_consideracion,
                req.body.obs_reportes,
                req.body.obs_expulsion,
                req.body.obs_reprobado,
                req.body.sexto_grado_cursado,
                req.body.ubicacion_centro_anterior];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.put('/update_aspectospedagogicos', (req, res, next) => {
    var query = 'UPDATE `aspectos pedagogicos` SET `motivos` = ?, `codigo_escuela` = ?, `codigo_rendimiento` = ?, `cod_asignatura_dificultad` = ?, `cod_asignatura_facilidad` = ?, `codigo_estudio` = ?, `cod_consideracion` = ?, `obs_reportes` = ?, `obs_expulsion` = ?, `obs_reprobado` = ?, `sexto_grado_cursado` = ?, `ubicacion_centro_anterior` = ? WHERE `codigo_pedagogicos` = ?';
    var values = [req.body.motivos,
                req.body.codigo_escuela,
                req.body.codigo_rendimiento,
                req.body.cod_asignatura_dificultad,
                req.body.cod_asignatura_facilidad,
                req.body.codigo_estudio,
                req.body.cod_consideracion,
                req.body.obs_reportes,
                req.body.obs_expulsion,
                req.body.obs_reprobado,
                req.body.sexto_grado_cursado,
                req.body.ubicacion_centro_anterior,
                req.body.codigo_pedagogicos];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.delete('/delete_aspectospedagogicos', (req, res, next) => {
    var query = 'delete from `aspectos pedagogicos` where codigo_pedagogicos = ?';
    var values = [req.query.codigo_pedagogicos];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.get('/get_aspectospedagogicos', (req, res, next) => {
    var query = 'select `aspectos pedagogicos`.`codigo_pedagogicos` as `Pedagogico`, `aspectos pedagogicos`.`motivos` as `Motivo`, `aspectos pedagogicos`.`sexto_grado_cursado` as `Donde curso sexto grado`, `aspectos pedagogicos`.`ubicacion_centro_anterior` as `Ubicacion`,`tipo escuela`.`descripcion` as `Tipo de escuela`, `rendimiento academico`.`descripcion` as `Rendimiento Academico`, `asignatura dificultad`.`descripcion` as `Clase dificil`, `asignatura facilidad`.`descripcion` as `Clase fácil`,`aspectos pedagogicos`.`obs_reprobado` as `Reprobado`,`estudio constante`.`descripcion` as `Forma de estudio`,`consideracion estudio`.`descripcion` as `Se considera`, `aspectos pedagogicos`.`obs_reportes` as `Reportado`,`aspectos pedagogicos`.`obs_expulsion` as `Expulsado` from `aspectos pedagogicos` join `tipo escuela` on `aspectos pedagogicos`.`codigo_escuela` = `tipo escuela`.`codigo_escuela` join `rendimiento academico` on `aspectos pedagogicos`.`codigo_rendimiento` = `rendimiento academico`.`codigo_rendimiento` join `asignatura dificultad` on `aspectos pedagogicos`.`cod_asignatura_dificultad` = `asignatura dificultad`.`cod_asignatura_dificultad` join `asignatura facilidad` on `aspectos pedagogicos`.`cod_asignatura_facilidad` = `asignatura facilidad`.`cod_asignatura_facilidad` join `estudio constante` on `aspectos pedagogicos`.`codigo_estudio` = `estudio constante`.`codigo_estudio` join `consideracion estudio` on `aspectos pedagogicos`.`cod_consideracion` = `consideracion estudio`.`cod_consideracion` where `aspectos pedagogicos`.`codigo_pedagogicos` = ?';
    var values = [req.query.codigo_pedagogicos];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.get('/get_ficha', (req, res, next) => {
    var query = 'select `ficha`.`num_ficha` as `No. Ficha`, `curso`.`desc_curso` as `Curso`, `seccion`.`desc_seccion` as `Seccion`, `modalidad`.`desc_modadlidad` as `Modalidad`, `jornada`.`desc_jornada` as `Jornada`,`ciudad`.`nom_ciudad` as `Ciudad`, `ficha`.`año` as `Año`, `ficha`.`comparte_hogar` as  `Vive con`, `ficha`.`obs_inst_proced` as `Instituto de procedencia`, `ficha`.`indice_acad` as `Indice academico`, `ficha`.`obs_repite_curso` as `Repite Curso`, `ficha`.`obs_materia_restrada` as `Materia Retrasada`, `ficha`.`obs_beca` as `Beca`, `ficha`.`num_emergencia` as `Numero de emergencia`, `ficha`.`motivacion_ingreso` as `Motivacion de ingreso`, `ficha`.`observaciones` as `Observaciones` from `ficha` join `seccion` on `ficha`.`cod_seccion` = `seccion`.`cod_seccion` join `curso` on `ficha`.`cod_curso` = `curso`.`cod_curso` join `modalidad` on `ficha`.`cod_modalidad` = `modalidad`.`cod_modalidad` join `jornada` on `ficha`.`cod_jornada` = `jornada`.`cod_jornada` join `ciudad` on `ficha`.`cod_ciudad` = `ciudad`.`cod_ciudad` where `ficha`.`num_ficha` = ?';
    var values = [req.query.num_ficha];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

    router.post('/insert_ficha', (req, res, next) => {
            var query = 'insert into ficha (num_ficha,cod_curso,cod_seccion,cod_modalidad,cod_jornada,cod_ciudad,año,comparte_hogar,obs_inst_proced,indice_acad,obs_repite_curso,obs_materia_restrada,obs_beca,num_emergencia,motivacion_ingreso,observaciones) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
            var values = [req.body.num_ficha,
                            req.body.cod_curso,
                            req.body.cod_seccion,
                            req.body.cod_modalidad,
                            req.body.cod_jornada,
                            req.body.cod_ciudad,
                            req.body.año,
                            req.body.comparte_hogar,
                            req.body.obs_inst_proced,
                            req.body.indice_acad,
                            req.body.obs_repite_curso,
                            req.body.obs_materia_retrasada,
                            req.body.obs_beca,
                            req.body.num_emergencia,
                            req.body.motivacion_ingreso,
                            req.body.observaciones];
            con.query(query, values, (err, result, fields) => {
                if(err) {
                    next(err);
                } else {
                    res.status(200).json(result);
                }
            });
        });

router.put('/update_ficha', (req, res, next) => {
            var query = 'update ficha set cod_curso=?,cod_seccion=?,cod_modalidad=?,cod_jornada=?,cod_ciudad=?,año=?,comparte_hogar=?,obs_inst_proced=?,indice_acad=?,obs_repite_curso=?,obs_materia_restrada=?,obs_beca=?,num_emergencia=?,motivacion_ingreso=?,observaciones=? where num_ficha=?';
            var values = [req.body.cod_curso,
                            req.body.cod_seccion,
                            req.body.cod_modalidad,
                            req.body.cod_jornada,
                            req.body.cod_ciudad,
                            req.body.año,
                            req.body.comparte_hogar,
                            req.body.obs_inst_proced,
                            req.body.indice_acad,
                            req.body.obs_repite_curso,
                            req.body.obs_materia_retrasada,
                            req.body.obs_beca,
                            req.body.num_emergencia,
                            req.body.motivacion_ingreso,
                            req.body.observaciones,
                            req.body.num_ficha];
            con.query(query, values, (err, result, fields) => {
                if(err) {
                    next(err);
                } else {
                    res.status(200).json(result);
                }
            });
        });

router.delete('/delete_ficha', (req, res, next) => {
        var query = 'delete from ficha where num_ficha=?';
        var values = [req.query.num_ficha];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });


router.get('/get_ciudad', (req, res, next) => {
        var query = 'SELECT * FROM ciudad';
        con.query(query, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_ciudad', (req, res, next) => {
        var query = 'insert into ciudad (nom_ciudad) values(?)';
        var values = [req.body.nom_ciudad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.put('/update_ciudad', (req, res, next) => {
        var query = 'update ciudad set nom_ciudad=? where cod_ciudad=?';
        var values = [req.body.nom_ciudad,
                        req.body.cod_ciudad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_ciudad', (req, res, next) => {
        var query = 'delete from ciudad where cod_ciudad=?';
        var values = [req.body.cod_ciudad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_documentos', (req, res, next) => {
    var query = 'SELECT * FROM documentos';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.post('/insert_documentos', (req, res, next) => {
        var query = 'insert into documentos (descrip_doc) values(?)';
        var values = [req.body.descrip_doc];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.put('/update_documentos', (req, res, next) => {
        var query = 'update documentos set descrip_doc = ? where tipo_documento = ?';
        var values = [req.body.descrip_doc,
                        req.body.tipo_documento];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_documentos', (req, res, next) => {
        var query = 'delete from documentos where tipo_documento=?';
        var values = [req.query.tipo_documento];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_jornada', (req, res, next) => {
    var query = 'SELECT * FROM jornada';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.post('/insert_jornada', (req, res, next) => {
        var query = 'insert into jornada (desc_jornada) values(?)';
        var values = [req.body.desc_jornada];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

    router.put('/update_jornada', (req, res, next) => {
        var query = 'update jornada set desc_jornada = ? where cod_jornada = ?';
        var values = [req.body.desc_jornada,
                        req.body.cod_jornada];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_jornada', (req, res, next) => {
        var query = 'delete from jornada where cod_jornada=?';
        var values = [req.query.cod_jornada];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_seccion', (req, res, next) => {
    var query = 'SELECT * FROM seccion';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.post('/insert_seccion', (req, res, next) => {
        var query = 'insert into seccion (desc_seccion) values(?)';
        var values = [req.body.desc_seccion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.put('/update_seccion', (req, res, next) => {
        var query = 'update seccion set desc_seccion = ? where cod_seccion = ?';
        var values = [req.body.desc_seccion,
                        req.body.cod_seccion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_seccion', (req, res, next) => {
        var query = 'delete from seccion where cod_seccion=?';
        var values = [req.query.cod_seccion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_modalidad', (req, res, next) => {
    var query = 'SELECT * FROM modalidad';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.post('/insert_modalidad', (req, res, next) => {
        var query = 'insert into modalidad (desc_modadlidad) values(?)';
        var values = [req.body.desc_modadlidad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.put('/update_modalidad', (req, res, next) => {
        var query = 'update modalidad set desc_modadlidad = ? where cod_modalidad = ?';
        var values = [req.body.desc_modadlidad,
                        req.body.cod_modalidad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_modalidad', (req, res, next) => {
        var query = 'delete from modalidad where cod_modalidad=?';
        var values = [req.query.cod_modalidad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });





module.exports = router;