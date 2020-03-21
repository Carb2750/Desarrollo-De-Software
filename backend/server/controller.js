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
    var query = 'select * from usuarios';
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
    var query = 'select `aspectos personales`.`cod_aspectos_personal` as `Codigo Personal`,`aspectos personales`.`obs_residencias` as `Vive con`,`relaciones sociales`.`descripcion` as `Sociabilidad`,`relaciones amistosas`.`descripcion` as `Relación con quien vive`,`aspectos personales`.`obs_relaciones_amistosas` as `Observacion amistades`,`aspectos personales`.`obs_noviazgos` as `Observacion noviazgo`,`mejores_amigos`.`descripcion` as `Mejor amigo`,`actividades_deportivas`.`descripcion` as `Actividad deportiva`,`aspectos personales`.`obs_actividades_deportivas` as `Otro deporte`,`actividades_artisticas`.`descripcion` as `Actividad artistica`,`aspectos personales`.`obs_actividades_artisticas` as `Otra arte`,`aspectos personales`.`obs_religion` as `Religion`,`problemas emocionales`.`descripcion` as `Problema Emocional`,`aspectos personales`.`obs_ayudas` as `En problemas acude a`  from `aspectos personales` join `relaciones sociales` on `aspectos personales`.`cod_relaciones_sociales` = `relaciones sociales`.`cod_relaciones_sociales` join `relaciones amistosas` on `aspectos personales`.`cod_relaciones_amistosas` = `relaciones amistosas`.`cod_relaciones_amistosas` join `mejores_amigos` on `aspectos personales`.`cod_mejor_amigo` = `mejores_amigos`.`cod_mejor_amigo` join `actividades_deportivas` on `aspectos personales`.`cod_act_deportiva` = `actividades_deportivas`.`cod_act_deportiva` join `actividades_artisticas` on `aspectos personales`.`cod_act_artistica` = `actividades_artisticas`.`cod_act_artistica` join `problemas emocionales` on `aspectos personales`.`cod_problema_emocional` = `problemas emocionales`.`cod_problema_emocional` where `aspectos personales`.`cod_aspectos_personal` = ?';
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
    var query = 'INSERT INTO `aspectos pedagogicos` (`motivos`, `sexto_grado_cursado`, `ubicacion_centro_anterior`, `codigo_escuela`, `codigo_rendimiento`, `cod_asignatura_dificultad`, `cod_asignatura_facilidad`, `codigo_estudio`, `cod_consideracion`, `obs_reportes`, `obs_expulsion`, `obs_reprobado`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';
    var values = [req.body.motivos,
                req.body.sexto_grado_cursado,
                req.body.ubicacion_centro_anterior,
                req.body.codigo_escuela,
                req.body.codigo_rendimiento,
                req.body.cod_asignatura_dificultad,
                req.body.cod_asignatura_facilidad,
                req.body.codigo_estudio,
                req.body.cod_consideracion,
                req.body.obs_reportes,
                req.body.obs_expulsion,
                req.body.obs_reprobado];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.put('/update_aspectospedagogicos', (req, res, next) => {
    var query = 'UPDATE `aspectos pedagogicos` SET `motivos` = ?, `sexto_grado_cursado` = ?, `ubicacion_centro_anterior` = ?, `codigo_escuela` = ?, `codigo_rendimiento` = ?, `cod_asignatura_dificultad` = ?, `cod_asignatura_facilidad` = ?, `codigo_estudio` = ?, `cod_consideracion` = ?, `obs_reportes` = ?, `obs_expulsion` = ?, `obs_reprobado` = ?  WHERE `codigo_pedagogicos` = ?';
    var values = [req.body.motivos,
                req.body.sexto_grado_cursado,
                req.body.ubicacion_centro_anterior,
                req.body.codigo_escuela,
                req.body.codigo_rendimiento,
                req.body.cod_asignatura_dificultad,
                req.body.cod_asignatura_facilidad,
                req.body.codigo_estudio,
                req.body.cod_consideracion,
                req.body.obs_reportes,
                req.body.obs_expulsion,
                req.body.obs_reprobado,
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
    var query = 'select `aspectos pedagogicos`.`codigo_pedagogicos` as `codigo_pedagogicos`, `aspectos pedagogicos`.`motivos` as `motivos`, `aspectos pedagogicos`.`sexto_grado_cursado` as `sexto_grado_cursado`, `aspectos pedagogicos`.`ubicacion_centro_anterior` as `ubicacion_centro_anterior`,`tipo escuela`.`descripcion` as `descripcion`, `rendimiento academico`.`descripcion` as `descripcion_rendimiento`, `asignatura dificultad`.`descripcion` as `descripcion_dificil`, `asignatura facilidad`.`descripcion` as `descripcion_facil`, `estudio constante`.`descripcion` as `descripcion_estudio`,`consideracion estudio`.`descripcion` as `descripcion_consideracion`,`aspectos pedagogicos`.`obs_reprobado` as `obs_reprobado`, `aspectos pedagogicos`.`obs_reportes` as `obs_reportes`,`aspectos pedagogicos`.`obs_expulsion` as `obs_expulsion` from `aspectos pedagogicos` join `tipo escuela` on `aspectos pedagogicos`.`codigo_escuela` = `tipo escuela`.`codigo_escuela` join `rendimiento academico` on `aspectos pedagogicos`.`codigo_rendimiento` = `rendimiento academico`.`codigo_rendimiento` join `asignatura dificultad` on `aspectos pedagogicos`.`cod_asignatura_dificultad` = `asignatura dificultad`.`cod_asignatura_dificultad` join `asignatura facilidad` on `aspectos pedagogicos`.`cod_asignatura_facilidad` = `asignatura facilidad`.`cod_asignatura_facilidad` join `estudio constante` on `aspectos pedagogicos`.`codigo_estudio` = `estudio constante`.`codigo_estudio` join `consideracion estudio` on `aspectos pedagogicos`.`cod_consideracion` = `consideracion estudio`.`cod_consideracion` ';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.get('/get_ficha', (req, res, next) => {
    var query = 'select `ficha`.`num_ficha` as `No. Ficha`, `curso`.`desc_curso` as `Curso`, `seccion`.`desc_seccion` as `Seccion`, `modalidad`.`desc_modadlidad` as `Modalidad`, `jornada`.`desc_jornada` as `Jornada`,`ciudad`.`nom_ciudad` as `Ciudad`, `ficha`.`anio` as `Año`, `ficha`.`comparte_hogar` as  `Vive con`, `ficha`.`obs_inst_proced` as `Instituto de procedencia`, `ficha`.`indice_acad` as `Indice academico`, `ficha`.`obs_repite_curso` as `Repite Curso`, `ficha`.`obs_materia_restrada` as `Materia Retrasada`, `ficha`.`obs_beca` as `Beca`, `ficha`.`num_emergencia` as `Numero de emergencia`, `ficha`.`motivacion_ingreso` as `Motivacion de ingreso`, `ficha`.`observaciones` as `Observaciones` from `ficha` join `seccion` on `ficha`.`cod_seccion` = `seccion`.`cod_seccion` join `curso` on `ficha`.`cod_curso` = `curso`.`cod_curso` join `modalidad` on `ficha`.`cod_modalidad` = `modalidad`.`cod_modalidad` join `jornada` on `ficha`.`cod_jornada` = `jornada`.`cod_jornada` join `ciudad` on `ficha`.`cod_ciudad` = `ciudad`.`cod_ciudad` where `ficha`.`num_ficha` = ?';
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
            var query = 'insert into ficha (cod_curso,cod_seccion,cod_modalidad,cod_jornada,cod_ciudad,anio,comparte_hogar,obs_inst_proced,indice_acad,obs_repite_curso,obs_materia_restrada,obs_beca,num_emergencia,motivacion_ingreso,observaciones) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
            var values = [req.body.cod_curso,
                            req.body.cod_seccion,
                            req.body.cod_modalidad,
                            req.body.cod_jornada,
                            req.body.cod_ciudad,
                            req.body.anio,
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
            var query = 'update ficha set cod_curso=?,cod_seccion=?,cod_modalidad=?,cod_jornada=?,cod_ciudad=?,anio=?,comparte_hogar=?,obs_inst_proced=?,indice_acad=?,obs_repite_curso=?,obs_materia_restrada=?,obs_beca=?,num_emergencia=?,motivacion_ingreso=?,observaciones=? where num_ficha=?';
            var values = [req.body.cod_curso,
                            req.body.cod_seccion,
                            req.body.cod_modalidad,
                            req.body.cod_jornada,
                            req.body.cod_ciudad,
                            req.body.anio,
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
        var values = [req.query.cod_ciudad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });



    
router.get('/get_cursos', (req, res, next) => {
    var query = 'SELECT * FROM curso';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.post('/insert_curso', (req, res, next) => {
    var query = 'insert into curso (desc_curso) values(?)';
    var values = [req.body.desc_curso];
    con.query(query, values, (err, result, fields) => {
        if(err) {
           next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.put('/update_curso', (req, res, next) => {
    var query = 'update curso set desc_curso=? where cod_curso=?';
    var values = [req.body.desc_curso,
                    req.body.cod_curso];
    con.query(query, values, (err, result, fields) => {
        if(err) {
           next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.delete('/delete_curso', (req, res, next) => {
    var query = 'delete from curso where cod_curso=?';
    var values = [req.query.cod_curso];
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

    router.get('/get_tipoescuela', (req, res, next) => {
        var query = 'SELECT * FROM `tipo escuela`';
        con.query(query, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });
    
    router.post('/insert_tipoescuela', (req, res, next) => {
            var query = 'insert into `tipo escuela` (descripcion) values(?)';
            var values = [req.body.descripcion];
            con.query(query, values, (err, result, fields) => {
                if(err) {
                    next(err);
                } else {
                    res.status(200).json(result);
                }
            });
        });
    
    router.put('/update_tipoescuela', (req, res, next) => {
            var query = 'update `tipo escuela` set `descripcion` = ? where `codigo_escuela` = ?';
            var values = [req.body.descripcion,
                            req.body.codigo_escuela];
            con.query(query, values, (err, result, fields) => {
                if(err) {
                   next(err);
                } else {
                    res.status(200).json(result);
                }
            });
        });
    
    router.delete('/delete_tipoescuela', (req, res, next) => {
            var query = 'delete from `tipo escuela` where codigo_escuela=?';
            var values = [req.query.codigo_escuela];
            con.query(query, values, (err, result, fields) => {
                if(err) {
                   next(err);
                } else {
                    res.status(200).json(result);
                }
            });
        });

router.post('/insert_deporte', (req, res, next) => {
        var query = 'INSERT INTO `actividades_deportivas` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_deporte', (req, res, next) => {
    var query = 'select * from `actividades_deportivas`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_deporte', (req, res, next) => {
        var query = 'UPDATE `actividades_deportivas` SET `descripcion` = ? WHERE (`cod_act_deportiva` = ?)';
        var values = [req.body.descripcion,
                        req.body.cod_act_deportiva];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_deporte', (req, res, next) => {
        var query = 'DELETE FROM `actividades_deportivas` WHERE (`cod_act_deportiva` = ?)';
        var values = [req.query.cod_act_deportiva];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });


router.get('/get_arte', (req, res, next) => {
    var query = 'select * from `actividades_artisticas`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_arte', (req, res, next) => {
        var query = 'UPDATE `actividades_artisticas` SET `descripcion` = ? WHERE (`cod_act_artistica` = ?)';
        var values = [req.body.descripcion,
                        req.body.cod_act_artistica];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_arte', (req, res, next) => {
        var query = 'DELETE FROM `actividades_artisticas` WHERE (`cod_act_artistica` = ?)';
        var values = [req.query.cod_act_artistica];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_arte', (req, res, next) => {
        var query = 'INSERT INTO `actividades_artisticas` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });


router.get('/get_relacionsocial', (req, res, next) => {
    var query = 'select * from `relaciones sociales`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_relacionsocial', (req, res, next) => {
        var query = 'UPDATE `relaciones sociales` SET `descripcion` = ? WHERE (`cod_relaciones_sociales` = ?)';
        var values = [req.body.descripcion,
                        req.body.cod_relaciones_sociales];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_relacionsocial', (req, res, next) => {
        var query = 'DELETE FROM `relaciones sociales` WHERE (`cod_relaciones_sociales` = ?)';
        var values = [req.query.cod_relaciones_sociales];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_relacionsocial', (req, res, next) => {
        var query = 'INSERT INTO `relaciones sociales` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_relacionamistosa', (req, res, next) => {
    var query = 'select * from `relaciones amistosas`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_relacionamistosa', (req, res, next) => {
        var query = 'UPDATE `relaciones amistosas` SET `descripcion` = ? WHERE `cod_relaciones_amistosas` = ?';
        var values = [req.body.descripcion,
                        req.body.cod_relaciones_amistosas];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_relacionamistosa', (req, res, next) => {
        var query = 'DELETE FROM `relaciones amistosas` WHERE `cod_relaciones_amistosas` = ?';
        var values = [req.query.cod_relaciones_amistosas];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_relacionamistosa', (req, res, next) => {
        var query = 'INSERT INTO `relaciones amistosas` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });


router.get('/get_problemaemocional', (req, res, next) => {
    var query = 'select * from `problemas emocionales`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_problemaemocional', (req, res, next) => {
        var query = 'UPDATE `problemas emocionales` SET `descripcion` = ? WHERE `cod_problema_emocional` = ?';
        var values = [req.body.descripcion,
                        req.body.cod_problema_emocional];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_problemaemocional', (req, res, next) => {
        var query = 'DELETE FROM `problemas emocionales` WHERE `cod_problema_emocional` = ?';
        var values = [req.query.cod_problema_emocional];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_problemaemocional', (req, res, next) => {
        var query = 'INSERT INTO `problemas emocionales` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_mejoramigo', (req, res, next) => {
    var query = 'select * from `mejores_amigos`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_mejoramigo', (req, res, next) => {
        var query = 'UPDATE `mejores_amigos` SET `descripcion` = ? WHERE `cod_mejor_amigo` = ?';
        var values = [req.body.descripcion,
                        req.body.cod_mejor_amigo];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_mejoramigo', (req, res, next) => {
        var query = 'DELETE FROM `mejores_amigos` WHERE `cod_mejor_amigo` = ?';
        var values = [req.query.cod_mejor_amigo];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_mejoramigo', (req, res, next) => {
        var query = 'INSERT INTO `mejores_amigos` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });


router.get('/get_asignaturadificultad', (req, res, next) => {
    var query = 'select * from `asignatura dificultad`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_asignaturadificultad', (req, res, next) => {
        var query = 'UPDATE `asignatura dificultad` SET `descripcion` = ? WHERE `cod_asignatura_dificultad` = ?';
        var values = [req.body.descripcion,
                        req.body.cod_asignatura_dificultad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_asignaturadificultad', (req, res, next) => {
        var query = 'DELETE FROM `asignatura dificultad` WHERE `cod_asignatura_dificultad` = ?';
        var values = [req.query.cod_asignatura_dificultad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_asignaturadificultad', (req, res, next) => {
        var query = 'INSERT INTO `asignatura dificultad` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });


router.get('/get_asignaturafacilidad', (req, res, next) => {
    var query = 'select * from `asignatura facilidad`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_asignaturafacilidad', (req, res, next) => {
        var query = 'UPDATE `asignatura facilidad` SET `descripcion` = ? WHERE `cod_asignatura_facilidad` = ?';
        var values = [req.body.descripcion,
                        req.body.cod_asignatura_facilidad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_asignaturafacilidad', (req, res, next) => {
        var query = 'DELETE FROM `asignatura facilidad` WHERE `cod_asignatura_facilidad` = ?';
        var values = [req.query.cod_asignatura_facilidad];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_asignaturafacilidad', (req, res, next) => {
        var query = 'INSERT INTO `asignatura facilidad` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_rendimientoacademico', (req, res, next) => {
    var query = 'select * from `rendimiento academico`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_rendimientoacademico', (req, res, next) => {
        var query = 'UPDATE `rendimiento academico` SET `descripcion` = ? WHERE `codigo_rendimiento` = ?';
        var values = [req.body.descripcion,
                        req.body.codigo_rendimiento];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_rendimientoacademico', (req, res, next) => {
        var query = 'DELETE FROM `rendimiento academico` WHERE `codigo_rendimiento` = ?';
        var values = [req.query.codigo_rendimiento];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_rendimientoacademico', (req, res, next) => {
        var query = 'INSERT INTO `rendimiento academico` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_consideracion', (req, res, next) => {
    var query = 'select * from `consideracion estudio`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_consideracion', (req, res, next) => {
        var query = 'UPDATE `consideracion estudio` SET `descripcion` = ? WHERE `cod_consideracion` = ?';
        var values = [req.body.descripcion,
                        req.body.cod_consideracion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_consideracion', (req, res, next) => {
        var query = 'DELETE FROM `consideracion estudio` WHERE `cod_consideracion` = ?';
        var values = [req.query.cod_consideracion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_consideracion', (req, res, next) => {
        var query = 'INSERT INTO `consideracion estudio` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });


router.get('/get_estudioconstante', (req, res, next) => {
    var query = 'select * from `estudio constante`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_estudioconstante', (req, res, next) => {
        var query = 'UPDATE `estudio constante` SET `descripcion` = ? WHERE `codigo_estudio` = ?';
        var values = [req.body.descripcion,
                        req.body.codigo_estudio];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_estudioconstante', (req, res, next) => {
        var query = 'DELETE FROM `estudio constante` WHERE `codigo_estudio` = ?';
        var values = [req.query.codigo_estudio];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_estudioconstante', (req, res, next) => {
        var query = 'INSERT INTO `estudio constante` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.get('/get_estudioconstante', (req, res, next) => {
    var query = 'select * from `estudio constante`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_estudioconstante', (req, res, next) => {
        var query = 'UPDATE `estudio constante` SET `descripcion` = ? WHERE `codigo_estudio` = ?';
        var values = [req.body.descripcion,
                        req.body.codigo_estudio];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_estudioconstante', (req, res, next) => {
        var query = 'DELETE FROM `estudio constante` WHERE `codigo_estudio` = ?';
        var values = [req.query.codigo_estudio];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_estudioconstante', (req, res, next) => {
        var query = 'INSERT INTO `estudio constante` (`descripcion`) VALUES (?)';
        var values = [req.body.descripcion];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

    router.get('/get_transtornos', (req, res, next) => {
        var query = 'select * from `transtornos`';
        con.query(query, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });
    
    
    router.put('/update_transtornos', (req, res, next) => {
            var query = 'UPDATE `transtornos` SET `descripcion` = ? WHERE `codigo_trans` = ?';
            var values = [req.body.descripcion,
                            req.body.codigo_trans];
            con.query(query, values, (err, result, fields) => {
                if(err) {
                   next(err);
                } else {
                    res.status(200).json(result);
                }
            });
        });
    
    router.delete('/delete_transtornos', (req, res, next) => {
            var query = 'DELETE FROM `transtornos` WHERE `codigo_trans` = ?';
            var values = [req.query.codigo_trans];
            con.query(query, values, (err, result, fields) => {
                if(err) {
                   next(err);
                } else {
                    res.status(200).json(result);
                }
            });
        });
    
    router.post('/insert_transtornos', (req, res, next) => {
            var query = 'INSERT INTO `transtornos` (`descripcion`) VALUES (?)';
            var values = [req.body.descripcion];
            con.query(query, values, (err, result, fields) => {
                if(err) {
                    next(err);
                } else {
                    res.status(200).json(result);
                }
            });
        });

    
/*router.get('/get_fichadocumento', (req, res, next) => {
    var query = 'select * from `ficha_documentos`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.put('/update_fichadocumentos', (req, res, next) => {
        var query = 'UPDATE `ficha_documento` SET `tipo_documento` = ? WHERE `num_ficha` = ? and `tipo_documento` = ?';
        var values = [req.body.tipo_documento,
                        req.body.num_ficha];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.delete('/delete_fichadocumentos', (req, res, next) => {
        var query = 'DELETE FROM `ficha_documentos` WHERE `num_ficha` = ? and `tipo_documento` = ?';
        var values = [req.query.num_ficha,
                        req.query.tipo_documento];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });

router.post('/insert_fichadocumento', (req, res, next) => {
        var query = 'INSERT INTO `ficha_documentos` (`num_ficha`,`tipo_documento`) VALUES (?,?)';
        var values = [req.body.num_ficha,
                        req.body.tipo_documento];
        con.query(query, values, (err, result, fields) => {
            if(err) {
                next(err);
            } else {
                res.status(200).json(result);
            }
        });
    });*/


router.get('/get_fichacompleta', (req, res, next) => {
    var query = 'select `alumnos datos`.`id_alumno` as  `id_alumno`, `alumnos datos`.`codigo_expediente` as `codigo_expediente`, `alumnos datos`.`fecha_expediente` as `fecha_expediente`,  `alumnos datos`.`nombre_alumno` as `nombre_alumno`,`alumnos datos`.`apellido_alumno` as `apellido_alumno`,`alumnos datos`.`fecha_nacimiento` as `fecha_nacimiento`,`alumnos datos`.`edad` as `edad`,`alumnos datos`.`sexo` as `sexo`, `curso`.`desc_curso` as `desc_curso`, `seccion`.`desc_seccion` as `desc_seccion`, `modalidad`.`desc_modadlidad` as `desc_modadlidad`, `jornada`.`desc_jornada` as `desc_jornada`,`ficha`.`anio` as `anio`, `alumnos datos`.`nombre_padre` as `nombre_padre`,`alumnos datos`.`tel_padre` as `tel_padre`, `alumnos datos`.`nombre_madre` as `nombre_madre`, `alumnos datos`.`tel_madre` as `tel_madre`, `alumnos datos`.`tel_casa` as `tel_casa`, `alumnos datos`.`tel_trabajo` as `tel_trabajo`, `alumnos datos`.`correo` as `correo`, `alumnos datos`.`residencia_actual` as `residencia_actual`,`ficha`.`comparte_hogar` as  `comparte_hogar`, `ficha`.`obs_inst_proced` as `obs_inst_proced`, `ficha`.`indice_acad` as `indice_acad`, `ficha`.`obs_repite_curso` as `obs_repite_curso`, `ficha`.`obs_materia_restrada` as `obs_materia_restrada`, `ficha`.`obs_beca` as `obs_beca`,`ficha`.`num_emergencia` as `num_emergencia`, `ficha`.`motivacion_ingreso` as `motivacion_ingreso`, `ficha`.`observaciones` as `observaciones` from `alumnos datos` join `ficha` on `alumnos datos`.`codigo_ficha` = `ficha`.`num_ficha` join `seccion` on `ficha`.`cod_seccion` = `seccion`.`cod_seccion` join `curso` on `ficha`.`cod_curso` = `curso`.`cod_curso` join `modalidad` on `ficha`.`cod_modalidad` = `modalidad`.`cod_modalidad` join `jornada` on `ficha`.`cod_jornada` = `jornada`.`cod_jornada` join `ciudad` on `ficha`.`cod_ciudad` = `ciudad`.`cod_ciudad` where id_alumno = ?';
    var values = [req.query.id_alumno];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.get('/get_registrocompleto', (req, res, next) => {
    var query = 'select `alumnos datos`.`id_alumno` as  `id_alumno`, `alumnos datos`.`codigo_expediente` as `codigo_expediente`, `alumnos datos`.`fecha_expediente` as `fecha_expediente`,  `alumnos datos`.`nombre_alumno` as `nombre_alumno`,`alumnos datos`.`apellido_alumno` as `apellido_alumno`,`alumnos datos`.`nacionalidad` as `nacionalidad`, `alumnos datos`.`lugar_procedencia` as `lugar_procedencia`, `alumnos datos`.`residencia_actual` as `residencia_actual`, `alumnos datos`.`nombre_padre` as `nombre_padre`,`alumnos datos`.`tel_padre` as `tel_padre`,`alumnos datos`.`ocupacion_padre` as `ocupacion_padre`, `alumnos datos`.`nombre_madre` as `nombre_madre`, `alumnos datos`.`tel_madre` as `tel_madre`, `alumnos datos`.`ocupacion_madre` as `ocupacion_madre`,`aspectos pedagogicos`.`motivos` as `motivos`, `aspectos pedagogicos`.`sexto_grado_cursado` as `sexto_grado_cursado`, `aspectos pedagogicos`.`ubicacion_centro_anterior` as `ubicacion_centro_anterior`,`tipo escuela`.`descripcion` as `descripcion_escuela`, `rendimiento academico`.`descripcion` as `descripcion_rendimiento`, `asignatura dificultad`.`descripcion` as `descripcion_dificultad`, `asignatura facilidad`.`descripcion` as `descripcion_facilidad`,`aspectos pedagogicos`.`obs_reprobado` as `obs_reprobado`,`estudio constante`.`descripcion` as `descripcion_constante`,`consideracion estudio`.`descripcion` as `descripcion_estudio`, `aspectos pedagogicos`.`obs_reportes` as `obs_reportes`,`aspectos pedagogicos`.`obs_expulsion` as `obs_expulsion`,`aspectos personales`.`obs_residencias` as `obs_residencias`,`relaciones sociales`.`descripcion` as `descripcion_sociales`,`relaciones amistosas`.`descripcion` as `descripcion_amistosas`,`aspectos personales`.`obs_relaciones_amistosas` as `obs_relaciones_amistosas`,`aspectos personales`.`obs_noviazgos` as `obs_noviazgos`,`mejores_amigos`.`descripcion` as `descripcion_amigos`,`actividades_deportivas`.`descripcion` as `descripcion_deportivas`,`aspectos personales`.`obs_actividades_deportivas` as `obs_actividades_deportivas`,`actividades_artisticas`.`descripcion` as `descripcion_artisticas`,`aspectos personales`.`obs_actividades_artisticas` as `obs_actividades_artisticas`,`aspectos personales`.`obs_religion` as `obs_religion`,`problemas emocionales`.`descripcion` as `descripcion`,`aspectos personales`.`obs_ayudas` as `obs_ayudas` from `alumnos datos` join `aspectos personales` on `alumnos datos`.`cod_aspectos_personal` = `aspectos personales`.`cod_aspectos_personal` join `aspectos pedagogicos` on `alumnos datos`.`aspectos_pedagogicos` = `aspectos pedagogicos`.`codigo_pedagogicos` join `relaciones sociales` on `aspectos personales`.`cod_relaciones_sociales` = `relaciones sociales`.`cod_relaciones_sociales` join `relaciones amistosas` on `aspectos personales`.`cod_relaciones_amistosas` = `relaciones amistosas`.`cod_relaciones_amistosas` join `mejores_amigos` on `aspectos personales`.`cod_mejor_amigo` = `mejores_amigos`.`cod_mejor_amigo` join `actividades_deportivas` on `aspectos personales`.`cod_act_deportiva` = `actividades_deportivas`.`cod_act_deportiva` join `actividades_artisticas` on `aspectos personales`.`cod_act_artistica` = `actividades_artisticas`.`cod_act_artistica` join `problemas emocionales` on `aspectos personales`.`cod_problema_emocional` = `problemas emocionales`.`cod_problema_emocional` join `tipo escuela` on `aspectos pedagogicos`.`codigo_escuela` = `tipo escuela`.`codigo_escuela` join `rendimiento academico` on `aspectos pedagogicos`.`codigo_rendimiento` = `rendimiento academico`.`codigo_rendimiento` join `asignatura dificultad` on `aspectos pedagogicos`.`cod_asignatura_dificultad` = `asignatura dificultad`.`cod_asignatura_dificultad` join `asignatura facilidad` on `aspectos pedagogicos`.`cod_asignatura_facilidad` = `asignatura facilidad`.`cod_asignatura_facilidad` join `estudio constante` on `aspectos pedagogicos`.`codigo_estudio` = `estudio constante`.`codigo_estudio` join `consideracion estudio` on `aspectos pedagogicos`.`cod_consideracion` = `consideracion estudio`.`cod_consideracion` where id_alumno = ?';
    var values = [req.query.id_alumno];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});



router.get('/get_all_alumnos', (req, res, next) => {
    var query = 'SELECT * FROM  `alumnos datos`';
    con.query(query, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});


router.get('/get_alumno', (req, res, next) => {
    var query = 'select * from `alumnos datos` where id_alumno = ?';
    var values = [req.query.id_alumno];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});




router.put('/update_alumno', (req, res, next) => {
            var query = 'update `alumnos datos` set nombre_alumno=?,apellido_alumno=?,fecha_nacimiento=?,edad=?,sexo=?,nacionalidad=?,lugar_procedencia=?,residencia_actual=?,nombre_padre=?,tel_padre=?,ocupacion_padre=?,nombre_madre=?,tel_madre=?,ocupacion_madre=?,aspectos_pedagogicos=?,cod_aspectos_personal=?,tel_casa=?,tel_trabajo=?,correo=?,codigo_ficha=? where id_alumno=?';
            var values = [req.body.nombre_alumno,
                req.body.apellido_alumno,
                req.body.fecha_nacimiento,
                req.body.edad,
                req.body.sexo,
                req.body.nacionalidad,
                req.body.lugar_procedencia,
                req.body.residencia_actual,
                req.body.nombre_padre,
                req.body.tel_padre,
                req.body.ocupacion_padre,
                req.body.nombre_madre,
                req.body.tel_madre,
                req.body.ocupacion_madre,
                req.body.aspectos_pedagogicos,
                req.body.cod_aspectos_personal,
                req.body.tel_casa,
                req.body.tel_trabajo,
                req.body.correo,
                req.body.codigo_ficha,
                req.body.id_alumno]
            con.query(query, values, (err, result, fields) => {
                if(err) {
                    next(err);
                } else {
                    res.status(200).json(result);
                }
            });
        });

router.post('/insert_alumno', (req, res, next) => {
    var query = 'INSERT INTO `alumnos datos` (`id_alumno`, `nombre_alumno`, `apellido_alumno`, `fecha_nacimiento`, `edad`, `sexo`, `nacionalidad`, `lugar_procedencia`, `residencia_actual`, `nombre_padre`, `tel_padre`, `ocupacion_padre`, `nombre_madre`, `tel_madre`, `ocupacion_madre`, `aspectos_pedagogicos`, `cod_aspectos_personal`, `tel_casa`, `tel_trabajo`, `correo`, `codigo_ficha`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    var values = [req.body.id_alumno,
                req.body.nombre_alumno,
                req.body.apellido_alumno,
                req.body.fecha_nacimiento,
                req.body.edad,
                req.body.sexo,
                req.body.nacionalidad,
                req.body.lugar_procedencia,
                req.body.residencia_actual,
                req.body.nombre_padre,
                req.body.tel_padre,
                req.body.ocupacion_padre,
                req.body.nombre_madre,
                req.body.tel_madre,
                req.body.ocupacion_madre,
                req.body.aspectos_pedagogicos,
                req.body.cod_aspectos_personal,
                req.body.tel_casa,
                req.body.tel_trabajo,
                req.body.correo,
                req.body.codigo_ficha];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});

router.delete('/delete_alumno', (req, res, next) => {
        var query = 'delete from `alumnos datos` where id_alumno=?';
        var values = [req.query.id_alumno];
        con.query(query, values, (err, result, fields) => {
            if(err) {
               next(err);
            } else {
                res.status(200).json(result);
            }
        });
});

router.get('/get_alumnos_transtornos', (req, res, next) => {
    var query = 'select `descripcion` from `alumnos_transtornos` join `transtornos` on `alumnos_transtornos`.`codigo_trans` = `transtornos`.`codigo_trans` where `alumnos_transtornos`.`codigo_expediente` = ?';
    var values = [req.query.codigo_expediente];
    con.query(query, values, (err, result, fields) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json(result);
        }
    });
});
    
module.exports = router;
